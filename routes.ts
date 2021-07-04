import { Router } from "express";
import BatchRouter from "./batch/batch.routes";
import StudentRouter from "./student/student.routes";
import TrackRouter from "./track/track.routes";

interface IRoutes {
    path: string,
    handler: Router
}

export const routes: IRoutes[] = [{
    path: "/batch",
    handler: BatchRouter
}, {
    path: "/track",
    handler: TrackRouter
}, {
    path: "/student",
    handler: StudentRouter
}]