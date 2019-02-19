import { Schema, model } from 'mongoose';
import { Student } from '../models/student.model';
import { Request, Response } from 'express';

export class StudentController {

  public getAllStudents(req: Request, res: Response) {
    Student.find({}, (err, results: []) => {

    });
  }

  public saveStudents(req: Request, res: Response) {
    const newStudents = (req.body as []).map((student: any) => new Student(student));
    Student.insertMany(newStudents, (err, results: []) => {

    });
  }

  public deleteStudent(req: Request, res: Response) {
    Student.remove({ studentIdentifier: req.params.studentId }, (err) => {

    });
  }

}