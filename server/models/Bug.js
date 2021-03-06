import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    description: { type: String },
    title: { type: String, required: true },
    reportedBy: { type: String },
    closedDate: { type: Date }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;
