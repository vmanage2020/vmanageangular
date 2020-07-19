import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StuentlistComponent } from './stuentlist/stuentlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import {HttpClientModule} from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { NgSelectModule } from '@ng-select/ng-select';
import { StudentappComponent } from './studentapp/studentapp.component';
import { StudentmanagementComponent } from './studentmanagement/studentmanagement.component';
import { StudentselectionComponent } from './studentselection/studentselection.component';

@NgModule({
  declarations: [StudentComponent, StuentlistComponent, StudentviewComponent, StudenteditComponent, StudentappComponent, StudentmanagementComponent, StudentselectionComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgSelectModule
  ]
})
export class StudentModule { }
