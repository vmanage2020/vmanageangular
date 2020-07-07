import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboards/dashboard-1', pathMatch: 'full'},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'activityapp', loadChildren: () => import('./School/activity/activity.module').then(m => m.ActivityModule) },
  { path: 'school', loadChildren: () => import('./School/student/student.module').then(m => m.StudentModule) },
  { path: 'schoolapp', loadChildren: () => import('./School/student/student.module').then(m => m.StudentModule) },
  { path: 'schools', loadChildren: () => import('./School/students/students.module').then(m => m.StudentsModule) },
  { path: 'global', loadChildren: () => import('./globaldata/languages/languages.module').then(m => m.LanguagesModule) },
  { path: 'global', loadChildren: () => import('./globaldata/boards/boards.module').then(m => m.BoardsModule) },

  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
  { path: 'chart', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CRMModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'adminUI', loadChildren: () => import('./adminUI/adminUI.module').then(m => m.AdminUIModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
