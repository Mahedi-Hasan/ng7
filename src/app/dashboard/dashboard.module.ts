import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { ContentComponent } from './dashboard/content/content.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './dashboard/content/about.component';
import { ContactComponent } from './dashboard/content/contact.component';

@NgModule({
  declarations: [LayoutComponent, ContentComponent, DashboardComponent, AboutComponent, ContactComponent],
  imports: [
  CommonModule,DashboardRoutingModule,SharedModule
  ]
})
export class DashboardModule { }
