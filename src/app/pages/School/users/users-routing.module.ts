import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GroupinformationsComponent } from './groupinformations/groupinformations.component';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { LogininformationsComponent } from './logininformations/logininformations.component';
import { LoginaddComponent } from './loginadd/loginadd.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RolleditComponent } from './rolledit/rolledit.component'; 


const routes: Routes = [
  {
    path: 'groupinform',
    component: GroupinformationsComponent
  },
  {
    path: 'rolledit/:id',
    component: RolleditComponent
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
  },
  {
    path: 'loginviewform/:id',
    component: LoginviewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersRoutingModule { }
