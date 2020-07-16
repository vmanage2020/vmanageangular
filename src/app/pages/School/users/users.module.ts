import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { GroupinformationsComponent } from './groupinformations/groupinformations.component';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { LogininformationsComponent } from './logininformations/logininformations.component';
import { LoginaddComponent } from './loginadd/loginadd.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { LoginviewComponent } from './loginview/loginview.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserserviceService } from './userservice.service'; 
@NgModule({
  declarations: [GroupinformationsComponent, GroupaddComponent, LogininformationsComponent, LoginaddComponent, LoginviewComponent],
  imports: [
    CommonModule,UsersRoutingModule,FormsModule,ReactiveFormsModule,DataTablesModule,NgSelectModule],
    providers: [UserserviceService],
  bootstrap: [GroupaddComponent,LoginaddComponent]
  
})
export class UsersModule { }
