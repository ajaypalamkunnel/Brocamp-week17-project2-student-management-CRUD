"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name, grade) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}
exports.Student = Student;
