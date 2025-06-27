import mongoose from 'mongoose'

const CandidateSchema=new mongoose.Schema({
    jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  name: String,
  email: String,
  phone: String,
  resumeLink: String, // We'll use this later with file upload
  appliedAt: {
    type: Date,
    default: Date.now,
  },
  testScore: Number,
  passedTest: Boolean,
})
const Candidate=new mongoose.model('Candidate',CandidateSchema)
export default Candidate