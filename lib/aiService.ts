import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export interface AnalysisResult {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  suggestions: string[];
}

export default async function analyzeResumeWithGemini(
  resumeText: string,
  jobDescription: string,
): Promise<AnalysisResult> {
  const prompt = `
    You are an expert ATS (Applicant Tracking System) and Resume Analyzer.
    Your task is to analyze the following resume against the provided job description.

    Resume Text:
    """
    ${resumeText}
    """

    Job Description:
    """
    ${jobDescription}
    """

    Provide the analysis in the following strict JSON format:
    {
      "score": <number between 0 and 100>,
      "matchedSkills": [<array of strings, skills found in both>],
      "missingSkills": [<array of strings, important skills in JD but missing in Resume>],
      "suggestions": [<array of strings, specific actionable advice to improve the resume for this job>]
    }

    Do not include any markdown formatting like \`\`\`json or \`\`\`. Just return the raw JSON string.
  `;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.1,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content || '{}';
    return JSON.parse(content);
  } catch (error: any) {
    console.error('Groq AI Service Error:', error);
    throw new Error('AI Analysis failed: ' + (error.message || 'Unknown error'));
  }
}
