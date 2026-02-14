import { Buffer } from 'buffer';
import { PDFParse } from 'pdf-parse';

export default async function extractTextFromPDF(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    const buffer = Buffer.from(arrayBuffer);
    const parser = new PDFParse({ data: buffer });
    const data = await parser.getText();

    if (!data || typeof data.text !== 'string') {
      throw new Error('PDF parsed but no text content found');
    }

    return data.text.replace(/\n\s*\n/g, '\n').trim();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('PDF Parsing Error:', errorMessage);
    throw new Error(`Failed to parse PDF: ${errorMessage}`);
  }
}
