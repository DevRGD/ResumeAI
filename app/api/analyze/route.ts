import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Analysis from '@/models/Analysis';
import extractTextFromPDF from '@/lib/pdfExtractor';
import analyzeResumeWithGemini from '@/lib/aiService';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const file = formData.get('resume') as File;
    const jobDescription = formData.get('jobDescription') as string;

    if (!file || !jobDescription) {
      return NextResponse.json(
        { error: 'Input Error: Resume file and Job Description are required.' },
        { status: 400 },
      );
    }

    let resumeText = '';
    try {
      const arrayBuffer = await file.arrayBuffer();
      resumeText = await extractTextFromPDF(arrayBuffer);
    } catch (pdfError: unknown) {
      console.error('PDF Extraction Error:', pdfError);
      return NextResponse.json(
        { error: 'Document Parsing Failed: Unable to read PDF content. Please ensure the file is not corrupted.' },
        { status: 422 },
      );
    }

    let analysisResult;
    try {
      analysisResult = await analyzeResumeWithGemini(resumeText, jobDescription);
    } catch (aiError: unknown) {
      console.error('AI Service Error:', aiError);
      return NextResponse.json(
        {
          error: 'Intelligence Engine Offline: The AI service failed to analyze the document. Please try again later.',
        },
        { status: 503 },
      );
    }

    try {
      await Analysis.create({
        originalFileName: file.name,
        resumeText,
        jobDescription,
        analysisResult,
      });
    } catch (dbError) {
      console.error('Database Warning:', dbError);
    }

    return NextResponse.json({ success: true, data: analysisResult });
  } catch (error: unknown) {
    console.error('Critical Server Error:', error);
    return NextResponse.json(
      { error: 'Internal System Error: An unexpected failure occurred during the analysis sequence.' },
      { status: 500 },
    );
  }
}
