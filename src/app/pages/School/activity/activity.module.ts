import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActiivityeditComponent } from './actiivityedit/actiivityedit.component';
import { ActiivityaddComponent } from './actiivityadd/actiivityadd.component';
import { ActiivitylistComponent } from './actiivitylist/actiivitylist.component';




@NgModule({
  declarations: [ActiivityeditComponent, ActiivityaddComponent, ActiivitylistComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
