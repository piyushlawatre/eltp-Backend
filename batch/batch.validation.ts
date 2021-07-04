import { body, query } from "express-validator";
import { validate } from "../middlewares/validate";


export const CreateBatchValidator = [
    body("name").isString().isLength({ min: 3 }),
    body("startTime").isString().isLength({ min: 3 }),
    body("endTime").isString().isLength({ min: 3 }),
    validate
]

export const ReadBatchByIdValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const UpdateBatchByIdValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    body("name").isString().isLength({ min: 3 }).optional(),
    body("startTime").isString().isLength({ min: 3 }).optional(),
    body("endTime").isString().isLength({ min: 3 }).optional(),
    validate
]

export const DeleteBatchValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]