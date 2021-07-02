import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HISTORY_ROUTES } from './routes';


@NgModule({
  imports: [RouterModule.forChild(HISTORY_ROUTES)],
  exports: [RouterModule]
})
export class HistoryConfigModule { }
