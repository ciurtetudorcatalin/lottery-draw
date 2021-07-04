import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawConfigModule } from './config/draw-config.module';
import { NumberDrawComponent } from './components/number-draw/number-draw.component';
import { PromptsModule } from '@shared/components/prompts/prompts.module';


@NgModule({
  declarations: [
    NumberDrawComponent,
  ],
  imports: [
    CommonModule,
    DrawConfigModule,
    PromptsModule
  ]
})
export class DrawModule { }
