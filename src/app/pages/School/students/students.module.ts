import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { StudentsComponent } from '../../School/students/students.component';
import { ListComponent } from '../../School/students/list/list.component';
import { AddComponent } from '../../School/students/add/add.component';
import { ViewComponent } from '../../School/students/view/view.component';


@NgModule({
  declarations: [StudentsComponent, ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class StudentsModule { }
