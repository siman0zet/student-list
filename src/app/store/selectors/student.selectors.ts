import { createFeatureSelector, createSelector } from '@ngrx/store';
import { studentsNode } from 'src/app/app.reducers';
import { IStudentState } from '../reducers/student.reducers';

export namespace StudentSelectors {
  const state = createFeatureSelector<IStudentState>(studentsNode);

  export const students = createSelector(state, (state) => state.students);

  export const selectedStudent = createSelector(
    state,
    (state) => state.selectedStudent
  );

  export const mode = createSelector(state, (state) => state.mode);
}
