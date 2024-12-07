import express from "express";

import { studentServices } from "../services/studentService";
import { StudentController } from '../controller/studentController';

const Router = express();

const studentService = new studentServices();
const studentController = new StudentController(studentService);

Router.get("/", studentController.getAll);
Router.get("/:id", studentController.getStudentById);
Router.post("/", studentController.createStudent);
Router.put("/:id", studentController.updateStudent);
Router.delete("/:id", studentController.deleteStudent);

export default Router ;