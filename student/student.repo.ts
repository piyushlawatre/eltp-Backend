import { StudentModel } from "./student.schema";
import { IStudent } from "./student.types";

// const aggregate = new Aggregate()

const createStudent = (student: IStudent) => StudentModel.create(student);

const readStudent = () => StudentModel.find().populate('track').populate('batch');

const readStudentById = (id: string) => StudentModel.findById(id).populate('track').populate('batch');

const updateStudentById = (id: string, student: IStudent) => StudentModel.findByIdAndUpdate(id, student, { new: true });

const deleteStudent = (id: string) => StudentModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createStudent,
    readStudent,
    readStudentById,
    updateStudentById,
    deleteStudent
}