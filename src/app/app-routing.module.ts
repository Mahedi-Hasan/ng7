import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'
      },
      
    ],
  },
  {
    path: 'dashboard', component:DashboardComponent,
    children: [
      {
        path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'users', loadChildren: './dashboard/users/user.module#UserModule'
      }
    ]
  },
  
  {
    path: '**', redirectTo: 'login' 
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
