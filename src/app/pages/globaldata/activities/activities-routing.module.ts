import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from '../activities/activities.component';
import { AddComponent } from '../activities/add/add.component';
import { ListComponent } from '../activities/list/list.component';

const routes: Routes = [ {
  path: 'activity', component: ActivitiesComponent,
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
export class ActivityRoutingModule { }
// global/language
