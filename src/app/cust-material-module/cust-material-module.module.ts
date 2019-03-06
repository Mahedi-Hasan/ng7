import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,MatCardModule, MatFormFieldModule,MatInputModule,
    MatSlideToggleModule,MatToolbarModule,MatIconModule,MatMenuModule
  ],
  exports: [
    MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,
    MatSlideToggleModule,MatToolbarModule,MatIconModule,MatMenuModule
  ]
})
export class CustMaterialModuleModule { }
