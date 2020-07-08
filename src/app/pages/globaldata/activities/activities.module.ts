import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivityRoutingModule } from './activities-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { ActivitiesComponent } from '../../globaldata/activities/activities.component';
import { AddComponent } from '../../globaldata/activities/add/add.component';
import { ListComponent } from '../../globaldata/activities/list/list.component';


@NgModule({
  declarations: [ActivitiesComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ActivityRoutingModule,
    DataTablesModule,
    NgbModule,
    HttpClientModule
  ]
})
export class ActivitiesModule { }
