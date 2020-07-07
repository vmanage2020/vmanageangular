import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BoardsComponent } from './boards.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component'

const routes: Routes = [{
  path: 'board', component: BoardsComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
