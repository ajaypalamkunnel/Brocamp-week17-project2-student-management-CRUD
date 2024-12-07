"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const student_1 = require("../models/student");
class studentServices {
    constructor() {
        this.students = [];
    }
    getAll() {
        return this.students;
    }
    getStudentById(id) {
        return this.students.find(student => student.id === id);
    }
    findStudentByName(name) {
        return this.students.find(student => student.name === name);
    }
    createStudent(name, grade) {
        const existingStudent = this.findStudentByName(name);
        if (existingStudent) {
            return null;
        }
        const id = this.students.length + 1;
        const newStudent = new student_1.Student(id, name, grade);
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id, name, grade) {
        const student = this.getStudentById(id);
        if (student) {
            student.name = name,
                student.grade = grade;
            return student;
        }
        return undefined;
    }
    deleteStudent(id) {
        const len = this.students.length;
        this.students = this.students.filter(student => student.id != id);
        return this.students.length < len;
    }
}
exports.studentServices = studentServices;
