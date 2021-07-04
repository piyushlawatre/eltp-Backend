import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import StudentService from "./student.service";
import { IStudent } from "./student.types";
import { CreateStudentValidator, DeleteStudentValidator, ReadStudentByIdValidator, UpdateStudentByIdValidator } from "./student.validation";

const router = Router();


/* ----------------------------- CREATE STUDEMT ----------------------------- */

router.post("/", CreateStudentValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const student = req.body as any;
            const result = await StudentService.createStudent(student);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })


/* -------------------------------- Read ALL -------------------------------- */

router.get("/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await StudentService.readStudent();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ---------------------------- READ STUDENT BY ID ---------------------------- */
// http://localhost:8000/student/readbyid?id=60e1c86bbe3a584618efd436

router.get("/readbyid", ReadStudentByIdValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const studentID = req.query.id;
            const result = await StudentService.readStudentById(studentID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE STUDENT BY ID --------------------------- */
//http://localhost:8000/student/updatebyid?id=60e1c3234458be2d44119d5f

router.put("/updatebyid", UpdateStudentByIdValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const studentID = req.query.id;
            const student = req.body as IStudent;
            const result = await StudentService.updateStudentById(studentID as string, student);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE STUDENT ------------------------------ */
// http://localhost:8000/student/deletebyid?id=60e1c3234458be2d44119d5f

router.put("/deletebyid", DeleteStudentValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const studentID = req.query.id;
            const result = await StudentService.deleteStudent(studentID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;