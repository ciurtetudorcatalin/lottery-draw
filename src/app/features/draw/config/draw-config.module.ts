import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DRAW_ROUTES } from './routes';

@NgModule({
  imports: [RouterModule.forChild(DRAW_ROUTES)],
  exports: [RouterModule]
})
export class DrawConfigModule { }
