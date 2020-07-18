import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { EndscreenComponent } from './endscreen/endscreen.component';
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'studentapplicaiton',
        component: StudentinfoComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'confirm',
        component: ConfirmComponent
    },
    {
        path: 'reset-password',
        component: PasswordresetComponent
    },
    {
        path: 'endscreen',
        component: EndscreenComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
