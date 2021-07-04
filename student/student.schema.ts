import { Schema, model, Document, } from "mongoose";
import { IStudent } from "./student.types"

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  batch: { type: Schema.Types.ObjectId, ref: "Batch" },
  track: { type: Schema.Types.ObjectId, ref: "Track" },
  isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type StudentDocument = IStudent & Document;

export const StudentModel = model<StudentDocument>("Student", studentSchema);