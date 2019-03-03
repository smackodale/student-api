import { Request, Response, Application } from 'express';
import { StudentController } from '../controllers/student.controller'

export class Routes {
  public studentController: StudentController = new StudentController();

  public routes(app: Application): void {
    app.route('/students')
      .get(this.studentController.getAllStudents)
      .post(this.studentController.saveStudents)
      .delete(this.studentController.deleteAllStudents);
    app.route('/students/:studentId').delete(this.studentController.deleteStudent);
  }
}