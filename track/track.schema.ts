import { model, Schema, Document } from "mongoose";
import { ITrack } from "./track.types";

const trackScehma = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false },
}, { timestamps: true })

type TrackDocument = ITrack & Document;
export const TrackModel = model<TrackDocument>("Track", trackScehma)