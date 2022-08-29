import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStudentState } from '../reducers/student.reducers';

export namespace StudentSelectors {
  const state = createFeatureSelector<IStudentState>('students');

  export const students = createSelector(state, (state) => state.students);

  export const selectedStudent = createSelector(
    state,
    (state) => state.selectedStudent
  );

  export const mode = createSelector(state, (state) => state.mode);
}
