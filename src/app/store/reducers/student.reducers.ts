import { createReducer, on } from '@ngrx/store';
import { Nullable } from 'src/app/nullable.type';
import { Student } from 'src/app/student/models/student';
import { StudentActions } from '../actions/student.actions';

export interface IStudentState {
  students: Student[];
  mode: 'create' | 'edit';
  selectedStudent: Nullable<number>;
}

export const initialState: IStudentState = {
  students: [],
  mode: 'create',
  selectedStudent: null,
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
  on(StudentActions.updateStudent, (state) => ({
    ...state,
    mode: 'edit',
  })),
  on(StudentActions.updateStudentSuccess, (state, { students }) => ({
    ...state,
    students: students,
    selectedStudent: null,
    mode: 'create',
  })),
  on(StudentActions.selectStudent, (state, { id }) => ({
    ...state,
    selectedStudent: id,
    mode: 'edit',
  }))
);
