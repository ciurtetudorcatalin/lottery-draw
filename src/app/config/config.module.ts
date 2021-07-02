import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { configureFontAwesomeLibrary } from './fontawesome';
import { APPLICATION_ROUTES, ROOT_ROUTER_EXTRA_OPTIONS } from './routes';


@NgModule({
  imports: [
    RouterModule.forRoot(APPLICATION_ROUTES, ROOT_ROUTER_EXTRA_OPTIONS),
    FontAwesomeModule
  ],
  exports: [
    RouterModule,
    FontAwesomeModule
  ],

})
export class ConfigModule {
  constructor(iconLibrary: FaIconLibrary, config: FaConfig) {
    configureFontAwesomeLibrary(iconLibrary, config);
  }
}
