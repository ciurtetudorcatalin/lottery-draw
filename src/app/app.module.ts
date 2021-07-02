import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
