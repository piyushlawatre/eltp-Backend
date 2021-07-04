import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import TrackService from "./track.service";
import { ITrack } from "./track.types";
import { CreateTrackValidator, DeleteTrackValidation, ReadTrackByIdValidator, UpdateTrackByIdValidator } from "./track.validation";

const router = Router()

/* ------------------------------ CREATE TRACK ------------------------------ */

router.post("/", CreateTrackValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const track = req.body as ITrack;
            const result = await TrackService.createTrack(track)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })
/* ----------------------------- READ ALL TRACK ----------------------------- */

router.get("/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await TrackService.readTrack();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ TRACK BY ID ---------------------------- */
// http://localhost:8000/track/readbyid?id=60e0b14a6429561b106eda0a

router.get("/readbyid", ReadTrackByIdValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trackID = req.query.id;
            const result = await TrackService.readTrackById(trackID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE TRACK BY ID --------------------------- */
//http://localhost:8000/track/updatebyid?id=60e1cdd46684a5166ce00f9d

router.put("/updatebyid", UpdateTrackByIdValidator,
    //validation required
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trackID = req.query.id;
            const track = req.body as ITrack;
            const result = await TrackService.updateTrackById(trackID as string, track);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE TRACK ------------------------------ */
// http://localhost:8000/track/deletebyid?id=60e0b5ad39ff4149c80580fa

router.put("/deletebyid", DeleteTrackValidation,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trackID = req.query.id;
            const result = await TrackService.deleteTrack(trackID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)


export default router;