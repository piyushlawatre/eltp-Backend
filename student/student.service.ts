import StudentRepo from "./student.repo";
import { IStudent } from "./student.types";

const createStudent = (student: IStudent) => StudentRepo.createStudent(student);

const readStudent = () => StudentRepo.readStudent();

const readStudentById = (id: string) => StudentRepo.readStudentById(id);

const updateStudentById = (id: string, student: IStudent) => StudentRepo.updateStudentById(id, student);

const deleteStudent = (id: string) => StudentRepo.deleteStudent(id)

export default {
    createStudent,
    readStudent,
    readStudentById,
    updateStudentById,
    deleteStudent
}