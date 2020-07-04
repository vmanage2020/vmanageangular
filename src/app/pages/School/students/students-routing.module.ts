import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StudentsComponent} from '../students/students.component';
import {AddComponent} from '../students/add/add.component';
import { ListComponent } from '../students/list/list.component';
import { ViewComponent } from '../students/view/view.component'


const routes: Routes = [
  {
    path: 'students', component: StudentsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent }
    ]
  }
];

/* const routes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
   {
    path: 'list',
    component: ListComponent
  },
  {
   path: 'view/:id',
   component: ViewComponent
 }
]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
