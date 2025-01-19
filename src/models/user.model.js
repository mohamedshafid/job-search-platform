import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_name: String,
  job_country: String,
});


export const Job=mongoose.models.job || mongoose.model("job",jobSchema);


const userSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  job_applied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});



export const User=mongoose.models.user || mongoose.model("user",userSchema);


