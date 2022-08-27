import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/student/models/student';

export namespace StudentActions {
  export const addStudent = createAction(
    'ADD_STUDENT',
    props<{ student: Student }>()
  );

  export const deleteStudent = createAction(
    'DELETE_STUDENT',
    props<{ id: number }>()
  );

  export const updateStudent = createAction(
    'UPDATE_STUDENT',
    props<{ student: Student; id: number }>()
  );

  export const updateStudentSuccess = createAction(
    'UPDATE_STUDENT_SUCCESS',
    props<{ students: Student[] }>()
  );
}
