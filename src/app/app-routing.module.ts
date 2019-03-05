import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes =[
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
   {
    path: '**',  redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
