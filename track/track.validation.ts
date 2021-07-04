import { body, query } from "express-validator";
import { validate } from "../middlewares/validate";

export const CreateTrackValidator = [
    body("name").isString().isLength({ min: 3 }),
    validate
]

export const ReadTrackByIdValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const UpdateTrackByIdValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    body("name").isString().isLength({ min: 3 }),
    validate
]

export const DeleteTrackValidation = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]