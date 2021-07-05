import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from './prompt.component';
import { ErrorPromptComponent } from './error-prompt.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PromptComponent,
    ErrorPromptComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PromptComponent,
    ErrorPromptComponent
  ]
})
export class PromptsModule { }
