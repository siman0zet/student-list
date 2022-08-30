import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { Student } from 'src/app/student/models/student';
import { StudentActions } from '../actions/student.actions';
import { StudentSelectors } from '../selectors/student.selectors';

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions) {}

  // updateStudent$ = createEffect(() => this.actions$.pipe());
}
