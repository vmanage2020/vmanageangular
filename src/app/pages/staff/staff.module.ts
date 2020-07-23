import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { StaffComponent } from './staff.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [StaffComponent, AddComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class StaffModule { }
