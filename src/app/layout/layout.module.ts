import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SkeletonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SkeletonComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
