import mongoose from "mongoose";

const questionSchema  = new mongoose.Schema({
type: String, // e.g., "MCQ", "Coding"
  question: String,
  options: [String], // for MCQ
  correctAnswer: String // for MCQ

});
const testSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Test=mongoose.model("Test",testSchema);
export default Test;