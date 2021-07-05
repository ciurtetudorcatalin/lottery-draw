import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { NgxLoadersCssModule } from 'ngx-loaders-css';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgxLoadersCssModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
