import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryConfigModule } from './config/history-config.module';
import { HistoryComponent } from './components/history/history.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { LoaderModule } from '@shared/components/loader/loader.module';
import { PromptsModule } from '@shared/components/prompts/prompts.module';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    HistoryConfigModule,
    LoaderModule,
    PromptsModule
  ]
})
export class HistoryModule { }
