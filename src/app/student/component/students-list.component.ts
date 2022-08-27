import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentActions } from 'src/app/store/actions/student.actions';
import { StudentSelectors } from 'src/app/store/selectors/student.selectors';
import { Student } from '../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: 'students-list.component.html',
  styleUrls: ['students-list.component.css'],
})
export class StudentsList implements OnInit {
  students$: Observable<Student[]>;
  form!: FormGroup;
  count: number = 0;
  mode: 'create' | 'edit' = 'create';

  constructor(private store$: Store, private fb: FormBuilder) {
    this.students$ = this.store$.select(StudentSelectors.selectStudents);
  }

  initForm = () => {
    this.form = this.fb.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      middleName: [null, [Validators.required]],
    });
  };

  fillForm = (student: Student) => {
    this.mode = 'edit';
    this.form.controls['lastName'].setValue(student.lastName);
    this.form.controls['firstName'].setValue(student.firstName);
    this.form.controls['middleName'].setValue(student.middleName);
  };

  ngOnInit() {
    this.initForm();
  }

  getStudent = (): Student => {
    return new Student(
      this.form.controls['lastName'].value,
      this.form.controls['firstName'].value,
      this.form.controls['middleName'].value,
      ++this.count
    );
  };

  editStudent = (id: number) => {};
  // this.store$.dispatch(StudentActions.updateStudent({ student, id }));

  addStudent = () =>
    this.store$.dispatch(
      StudentActions.addStudent({ student: this.getStudent() })
    );

  deleteStudent = (id: number) =>
    this.store$.dispatch(StudentActions.deleteStudent({ id }));
}
