import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordComponent
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
