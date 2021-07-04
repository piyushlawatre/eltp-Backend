import { TrackModel } from "./track.schema";
import { ITrack } from "./track.types";

const createTrack = (track:ITrack) => TrackModel.create(track);

const readTrack = () => TrackModel.find();

const readTrackById = (id: string) => TrackModel.findById(id);

const updateTrackById = (id: string, track: ITrack) => TrackModel.findByIdAndUpdate(id, track, { new: true });

const deleteTrack = (id: string) => TrackModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createTrack,
    readTrack,
    readTrackById,
    updateTrackById,
    deleteTrack
}