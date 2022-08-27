import { ActionReducerMap } from '@ngrx/store';
import {
  IStudentState,
  studentReducer,
} from './store/reducers/student.reducers';

export const studentsNode = 'students';

export interface IAppState {
  [studentsNode]: IStudentState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  [studentsNode]: studentReducer,
};
