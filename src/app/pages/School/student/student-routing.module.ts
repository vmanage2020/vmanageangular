import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StuentlistComponent} from './stuentlist/stuentlist.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudenteditComponent } from './studentedit/studentedit.component'


const routes: Routes = [
  {
    path: 'studentform',
    component: StudentComponent
  },
   {
    path: 'studentlist',
    component: StuentlistComponent
  },
  {
   path: 'studentview',
   component: StudentviewComponent
 },
 {
  path: 'studentedit',
  component: StudenteditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }



