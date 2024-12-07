import { Response , Request, response } from "express";
import { studentServices } from '../services/studentService';


export class StudentController {
    constructor(
        private studentServices:studentServices
    ){}

    getAll = ( req:Request , res:Response ) :void => {
        const students = this.studentServices.getAll()
        res.json(students)
    }

    getStudentById = (req:Request,res:Response):void =>{
        const id = Number(req.params.id);
        const student = this.studentServices.getStudentById(id)
        if(student){
            res.json(student)
        }else{
            res.status(404).json({message: 'Student not found'})
        }
    }

    createStudent = (req: Request, res: Response): void => {
    const { name, grade } = req.body;
    console.log(name);
    console.log(grade);

    const numericGrade = Number(grade);
    if (typeof name === 'string' && !isNaN(numericGrade)) {
        // Check if the student already exists in the model
        const existingStudent = this.studentServices.findStudentByName(name);
        
        if (existingStudent) {
            res.status(400).json({ message: 'Student already exists' });
        } else {
            const newStudent = this.studentServices.createStudent(name, numericGrade);
            res.status(201).json(newStudent);
        }
    } else {
        res.status(400).json({ message: 'Invalid student data' });
    }
};


    updateStudent = (req:Request,res:Response):void => {
        const id = Number(req.params.id);
        const {name,grade} = req.body;
        const newGrade = Number(grade)
        if(typeof name==='string' && typeof !isNaN(newGrade)){
            const updatedStudent = this.studentServices.updateStudent(id,name,newGrade)
            if(updatedStudent){
                res.status(201).json(updatedStudent)
            }else{
                res.status(404).json({message : 'Student not found'})
            }
        }else{
            res.status(400).json({message: 'Invalid student data'})
        }
    }

    deleteStudent = (req:Request,res:Response):void => {
        const id = Number(req.params.id);
        const deleted = this.studentServices.deleteStudent(id)
        if(deleted){
            res.status(200).json({message: 'Student is deleted'})
        }else{
            res.status(404).json({message: 'Student not found'})
        }
    }
}