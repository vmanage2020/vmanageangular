import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [BoardsComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ]
})
export class BoardsModule { }
