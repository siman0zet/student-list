import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStudentState } from '../reducers/student.reducers';

export namespace StudentSelectors {
  const state = createFeatureSelector<IStudentState>('students');
  export const selectStudents = createSelector(
    state,
    (state) => state.students
  );
}
