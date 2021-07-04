import { model, Schema, Document } from "mongoose";
import { IBatch } from "./batch.types";

const batchScehma = new Schema({
    name: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false },
}, { timestamps: true })

type BatchDocument = IBatch & Document;
export const BatchModel = model<BatchDocument>("Batch", batchScehma)

