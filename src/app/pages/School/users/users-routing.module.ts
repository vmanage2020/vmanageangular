import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GroupinformationsComponent } from './groupinformations/groupinformations.component';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { LogininformationsComponent } from './logininformations/logininformations.component';
import { LoginaddComponent } from './loginadd/loginadd.component';


const routes: Routes = [
  {
    path: 'groupinform',
    component: GroupinformationsComponent
  },
  {
    path: 'groupadd',
    component: GroupaddComponent
  },
   {
    path: 'logininform',
    component: LogininformationsComponent
  },
  {
   path: 'loginadd',
   component: LoginaddComponent
 }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersRoutingModule { }
