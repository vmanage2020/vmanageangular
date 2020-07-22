import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StuentlistComponent} from './stuentlist/stuentlist.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import {StudentappComponent} from './studentapp/studentapp.component'
import { StudentmanagementComponent } from './studentmanagement/studentmanagement.component'
import { StudentselectionComponent } from './studentselection/studentselection.component';
import { StudentmanagementviewComponent } from './studentmanagementview/studentmanagementview.component';
import { StudentselectionviewComponent } from './studentselectionview/studentselectionview.component';


const routes: Routes = [
  {
    path: 'studentform',
    component: StudentComponent
  },
  {
    path: 'studentapplicaiton',
    component: StudentappComponent
  },
   {
    path: 'studentlist',
    component: StuentlistComponent
  },
  {
   path: 'studentview/:id',
   component: StudentviewComponent
 },
 {
  path: 'studentedit/:id',
  component: StudenteditComponent
},
{
  path: 'studentmanagement',
  component: StudentmanagementComponent
},
{
  path: 'studentselection',
  component: StudentselectionComponent
},
{
  path: 'studentmangeview/:id',
  component: StudentmanagementviewComponent
},
{
  path: 'studentselectionview/:id',
  component: StudentselectionviewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }



