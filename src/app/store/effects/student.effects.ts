import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { StudentService } from 'src/app/student/services/student.service';
import { StudentActions } from '../actions/student.actions';

@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.updateStudent.type),
      switchMap((student, id) =>
        this.studentService.getAllStudents().pipe(
          map((students) => {
            students[id] = student;
            return StudentActions.updateStudentSuccess({ students: students });
          })
        )
      )
    )
  );
}
