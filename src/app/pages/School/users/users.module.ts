import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { GroupinformationsComponent } from './groupinformations/groupinformations.component';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { LogininformationsComponent } from './logininformations/logininformations.component';
import { LoginaddComponent } from './loginadd/loginadd.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [GroupinformationsComponent, GroupaddComponent, LogininformationsComponent, LoginaddComponent],
  imports: [
    CommonModule,UsersRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class UsersModule { }