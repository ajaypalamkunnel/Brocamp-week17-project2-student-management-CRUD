"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentService_1 = require("../services/studentService");
const studentController_1 = require("../controller/studentController");
const Router = (0, express_1.default)();
const studentService = new studentService_1.studentServices();
const studentController = new studentController_1.StudentController(studentService);
Router.get("/", studentController.getAll);
Router.get("/:id", studentController.getStudentById);
Router.post("/", studentController.createStudent);
Router.put("/:id", studentController.updateStudent);
Router.delete("/:id", studentController.deleteStudent);
exports.default = Router;
