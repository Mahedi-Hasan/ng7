import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { ContentComponent } from './dashboard/content/content.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [LayoutComponent, ContentComponent, DashboardComponent],
  imports: [
  CommonModule,DashboardRoutingModule
  ]
})
export class DashboardModule { }
