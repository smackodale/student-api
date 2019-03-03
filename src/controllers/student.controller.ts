import { Schema, model, ModelUpdateOptions } from 'mongoose';
import { Student, IStudent } from '../models/student.model';
import { Request, Response } from 'express';
import { UnorderedBulkOperation, BulkWriteResult, MongoError } from 'mongodb';

export class StudentController {

  public getAllStudents(req: Request, res: Response) {
    Student.find({}, (err, results: []) => {
      if (err) {
        res.send(err);
      }
      res.json(results);
    });
  }

  public saveStudents(req: Request, res: Response) {
    const bulk: UnorderedBulkOperation = Student.collection.initializeUnorderedBulkOp();
    (req.body as IStudent[]).forEach((student: IStudent) => {
      bulk.find({ studentIdentifier: student.studentIdentifier })
        .upsert()
        .updateOne(student)
    });

    bulk.execute((err: MongoError, result: BulkWriteResult) => {
      if (err) {
        res.send(err);
      }

      res.status(200);
      res.send(result);
    });
  }

  public deleteStudent(req: Request, res: Response) {
    Student.deleteOne({ studentIdentifier: req.params.studentId }, (err) => {
      if (err) {
        res.send(err);
      }

      res.status(200);
      res.send();
    });
  }

  public deleteAllStudents(req: Request, res: Response) {
    Student.deleteMany({}, (err) => {
      if (err) {
        res.send(err);
      }

      res.status(200);
      res.send();
    });
  }

}