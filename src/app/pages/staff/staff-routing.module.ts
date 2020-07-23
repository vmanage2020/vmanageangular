import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent } from './staff.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '', component: StaffComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
    { path: 'view/:id', component: ViewComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
