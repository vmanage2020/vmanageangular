import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import{ StudentModule} from './School/student/student.module';
import { AppsModule } from './apps/apps.module';
import { EmailModule } from './email/email.module';
import { ExtrasModule } from './extras/extras.module';
import { UiModule } from './ui/ui.module';
import { IconsModule } from './icons/icons.module';
import { FormModule } from './form/form.module';
import { ChartModule } from './chart/chart.module';
import { MapsModule } from './maps/maps.module';
import { TablesModule } from './tables/tables.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { CRMModule } from './crm/crm.module';
import { AdminUIModule } from './adminUI/adminUI.module';
import { ErrorModule } from './error/error.module';

import { PagesRoutingModule } from './pages-routing.module';
/* import { StudentsComponent } from './School/students/students.component';
import { ListComponent } from './School/students/list/list.component';
import { AddComponent } from './School/students/add/add.component';
import { ViewComponent } from './School/students/view/view.component'; */


@NgModule({
  //declarations: [StudentsComponent, ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    DashboardsModule,
    StudentModule,
    AppsModule,
    EmailModule,
    ExtrasModule,
    UiModule,
    IconsModule,
    FormModule,
    ChartModule,
    MapsModule,
    TablesModule,
    EcommerceModule,
    CRMModule,
    AdminUIModule,
    ErrorModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
