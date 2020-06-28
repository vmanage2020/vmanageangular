import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StuentlistComponent } from './stuentlist/stuentlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [StudentComponent, StuentlistComponent, StudentviewComponent, StudenteditComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentModule { }
