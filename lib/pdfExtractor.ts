import { Buffer } from 'buffer';
import pdf from 'pdf-parse';

export default async function extractTextFromPDF(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    const buffer = Buffer.from(arrayBuffer);
    const data = await pdf(buffer);

    if (!data || !data.text) throw new Error('PDF parsed but no text content found');

    return data.text.replace(/\n\s*\n/g, '\n').trim();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('PDF Parsing Error:', errorMessage);
    throw new Error(`Failed to parse PDF: ${errorMessage}`);
  }
}
