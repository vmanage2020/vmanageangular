import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';

import { StaffComponent } from './staff.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [StaffComponent, AddComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DataTablesModule
  ]
})
export class StaffModule { }
