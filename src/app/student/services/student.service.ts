import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentSelectors } from 'src/app/store/selectors/student.selectors';

@Injectable()
export class StudentService {
  constructor(private store$: Store) {}

  getAllStudents = () => {
    return this.store$.select(StudentSelectors.students);
  };
}
