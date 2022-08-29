import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { arraysAreNotAllowedInProps } from '@ngrx/store/src/models';
import { map, mergeMap, switchMap } from 'rxjs';
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
      switchMap(({ student, id }) =>
        this.studentService.getAllStudents().pipe(
          map((students) => {
            const array = [...students];
            const findedIndex = array.findIndex((stud) => stud.id === id);
            if (findedIndex !== -1) array[findedIndex] = student;
            return StudentActions.updateStudentSuccess({ students: array });
          })
        )
      )
    )
  );
}
