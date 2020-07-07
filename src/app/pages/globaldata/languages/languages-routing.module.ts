import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagesComponent } from '../languages/languages.component';
import { AddComponent } from '../languages/add/add.component';
import { ListComponent } from '../languages/list/list.component';

const routes: Routes = [ {
  path: 'language', component: LanguagesComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
// global/language
