import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobCompany: {
    type: String,
    required: true
  },
  jobPortalUrl: {
    type: String,
    required: true
  },
  jobPortalStatus: {
    type: String,
    default: "",
  },
  jobCurrentStatus: {
    type: String,
    default: "Applied",
    required: true
  },
  referred: {
    type: Boolean,
    default: false
  }
}, 
{ timestamps: true });

const Job = mongoose.model("Job", JobSchema);

export default Job;
