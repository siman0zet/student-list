import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { studentReducer } from './store/reducers/student.reducers';
import { StudentsList } from './student/component/students-list.component';
import { StudentService } from './student/services/student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducers';
import { StudentEffects } from './store/effects/student.effects';

@NgModule({
  declarations: [AppComponent, StudentsList],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([StudentEffects]),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
