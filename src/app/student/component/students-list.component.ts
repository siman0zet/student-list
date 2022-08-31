import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Nullable } from 'src/app/nullable.type';
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
  selectedStudent$: Observable<Nullable<number>>;
  mode$: Observable<'edit' | 'create'>;
  form!: FormGroup;
  count: number = 0;

  constructor(private store$: Store, private fb: FormBuilder) {
    this.students$ = this.store$.select(StudentSelectors.students);
    this.selectedStudent$ = this.store$.select(
      StudentSelectors.selectedStudent
    );
    this.mode$ = this.store$.select(StudentSelectors.mode);
  }

  initForm = () => {
    this.form = this.fb.group({
      lastName: [null],
      firstName: [null],
      middleName: [null],
    });
  };

  fillForm = (student: Student) => {
    this.form.controls['lastName'].setValue(student.lastName);
    this.form.controls['firstName'].setValue(student.firstName);
    this.form.controls['middleName'].setValue(student.middleName);
  };

  clearForm = () => this.form.reset();

  ngOnInit() {
    this.initForm();
  }

  getNewStudent = (id: number): Student => {
    return new Student(
      this.form.controls['lastName'].value,
      this.form.controls['firstName'].value,
      this.form.controls['middleName'].value,
      id
    );
  };

  selectStudent = (student: Student) => {
    this.store$.dispatch(StudentActions.selectStudent({ id: student.id }));
    this.fillForm(student);
  };

  editStudent = (id: number) => {
    this.store$.dispatch(
      StudentActions.updateStudent({
        student: this.getNewStudent(id),
        id: id,
      })
    );
    this.clearForm();
  };

  addStudent = () =>
    this.store$.dispatch(
      StudentActions.addStudent({ student: this.getNewStudent(++this.count) })
    );

  deleteStudent = (id: number) =>
    this.store$.dispatch(StudentActions.deleteStudent({ id }));
}
