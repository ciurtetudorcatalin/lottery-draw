import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CoreModule } from './core/core.module';
import { ConfigModule } from './config/config.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
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
