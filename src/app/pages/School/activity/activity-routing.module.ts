import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActiivityeditComponent } from './actiivityedit/actiivityedit.component';
import { ActiivityaddComponent } from './actiivityadd/actiivityadd.component';
import { ActiivitylistComponent } from './actiivitylist/actiivitylist.component';

const routes: Routes = [
  {
    path: 'activityadd',
    component: ActiivityaddComponent
  },
  {
    path: 'activitylist',
    component: ActiivitylistComponent
  },
   {
    path: 'activityedit',
    component: ActiivityeditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
