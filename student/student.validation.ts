import { body, query } from "express-validator";
import { validate } from "../middlewares/validate";

export const CreateStudentValidator = [
    body("firstName").isString().isLength({ min: 3 }),
    body("lastName").isString().isLength({ min: 3 }),
    body("batch").isString().isLength({ min: 24, max: 24 }),
    body("track").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const ReadStudentByIdValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const UpdateStudentByIdValidator = [
    body("firstName").isString().isLength({ min: 3 }),
    body("lastName").isString().isLength({ min: 3 }),
    body("batch").isString().isLength({ min: 24, max: 24 }),
    body("track").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const DeleteStudentValidator = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]
