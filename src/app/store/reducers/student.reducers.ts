import { createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/student/models/student';
import { StudentActions } from '../actions/student.actions';

export interface IStudentState {
  students: Student[];
}

export const initialState: IStudentState = {
  students: [],
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.addStudent, (state, { student }) => ({
    ...state,
    students: [student, ...state.students],
  })),
  on(StudentActions.deleteStudent, (state, { id }) => ({
    ...state,
    students: [...state.students.filter((student) => student.id !== id)],
  })),
  on(StudentActions.updateStudentSuccess, (state, { students }) => ({
    ...state,
    students: students,
  }))
);
