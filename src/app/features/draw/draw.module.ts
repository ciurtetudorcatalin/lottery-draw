import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawConfigModule } from './config/draw-config.module';
import { NumberDrawComponent } from './components/number-draw/number-draw.component';
import { DrawComponent } from './components/draw/draw.component';
import { DrawEndedComponent } from './components/draw-ended/draw-ended.component';
import { PromptsModule } from '@shared/components/prompts/prompts.module';


@NgModule({
  declarations: [
    NumberDrawComponent,
    DrawComponent,
    DrawEndedComponent
  ],
  imports: [
    CommonModule,
    DrawConfigModule,
    PromptsModule
  ]
})
export class DrawModule { }
