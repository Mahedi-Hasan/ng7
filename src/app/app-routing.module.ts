import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes = [
  {
    path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: '',
  //     }
  //   ]
  // },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
