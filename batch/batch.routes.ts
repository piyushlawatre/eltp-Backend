import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import BatchService from "./batch.service";
import { IBatch } from "./batch.types";
import { CreateBatchValidator, DeleteBatchValidator, ReadBatchByIdValidator, UpdateBatchByIdValidator } from "./batch.validation";

const router = Router()

/* ------------------------------ CREATE BATCH ------------------------------ */

router.post("/", CreateBatchValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const batch = req.body as IBatch;
            const result = await BatchService.createBatch(batch);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ----------------------------- READ ALL BATCH ----------------------------- */

router.get("/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BatchService.readBatch();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ BATCH BY ID ---------------------------- */
// http://localhost:8000/batch/readbyid?id=60e0b889dc42c71494e415ea

router.get("/readbyid", ReadBatchByIdValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const batchID = req.query.id;
            const result = await BatchService.readBatchById(batchID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)
/* --------------------------- UPDATE BATCH BY ID --------------------------- */
//http://localhost:8000/batch/updatebyid?id=60e0b889dc42c71494e415ea

router.put("/updatebyid", UpdateBatchByIdValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const batchId = req.query.id;
            const batch = req.body as IBatch;
            const result = await BatchService.updateBatchById(batchId as string, batch);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE BATCH ------------------------------ */
// http://localhost:8000/batch/deletebyid?id=60e0bb47641be043206fe1a7

router.put("/deletebyid", DeleteBatchValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const batchID = req.query.id;
            const result = await BatchService.deleteBatch(batchID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;