import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LanguageRoutingModule } from './languages-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { LanguagesComponent } from '../../globaldata/languages/languages.component';
import { AddComponent } from '../../globaldata/languages/add/add.component';
import { ListComponent } from '../../globaldata/languages/list/list.component';


@NgModule({
  declarations: [LanguagesComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageRoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class LanguagesModule { }
