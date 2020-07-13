import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GlobalComponent } from './global.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { GlobalService } from './global.service';

@NgModule({
  declarations: [GlobalComponent, AddComponent, ListComponent ],
  providers: [GlobalService],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule.forRoot()
  ]
})
export class GlobalModule { }
