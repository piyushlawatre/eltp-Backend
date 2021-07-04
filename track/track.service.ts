import TrackRepo from "./track.repo";
import { ITrack } from "./track.types";

const createTrack = (track: ITrack) => TrackRepo.createTrack(track);

const readTrack = () => TrackRepo.readTrack();

const readTrackById = (id: string) => TrackRepo.readTrackById(id);

const updateTrackById = (id: string, track: ITrack) => TrackRepo.updateTrackById(id, track);

const deleteTrack = (id: string) => TrackRepo.deleteTrack(id);

export default {
    createTrack,
    readTrack,
    readTrackById,
    updateTrackById,
    deleteTrack
}