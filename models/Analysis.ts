import mongoose, { Document, Model } from 'mongoose';

export interface IAnalysis extends Document {
  originalFileName: string;
  resumeText: string;
  jobDescription: string;
  analysisResult: {
    score: number;
    matchedSkills: string[];
    missingSkills: string[];
    suggestions: string[];
  };
  createdAt: Date;
}

const AnalysisSchema = new mongoose.Schema<IAnalysis>({
  originalFileName: String,
  resumeText: String,
  jobDescription: String,
  analysisResult: {
    score: Number,
    matchedSkills: [String],
    missingSkills: [String],
    suggestions: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Analysis: Model<IAnalysis> = mongoose.models.Analysis || mongoose.model<IAnalysis>('Analysis', AnalysisSchema);
export default Analysis;
