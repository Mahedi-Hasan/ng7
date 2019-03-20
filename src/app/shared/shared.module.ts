import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { CustMaterialModuleModule } from '../cust-material-module/cust-material-module.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FlexLayoutModule, MatIconModule,
    CustMaterialModuleModule,RouterModule,FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,FlexLayoutModule,MatIconModule,
    CustMaterialModuleModule,FormsModule,
    ReactiveFormsModule,RouterModule
  ]
})
export class SharedModule { }
