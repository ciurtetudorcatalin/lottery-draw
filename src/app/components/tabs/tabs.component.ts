import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DRAW_ROUTE, HISTORY_ROUTE } from '@config/routes';
import { TabConfig } from './tab.component';

const tabConfigurations: TabConfig[] = [{
    text: 'Let`s Play',
    icon: 'play',
    route: DRAW_ROUTE
  }, {
    text: 'Draw History',
    icon: 'history',
    route: HISTORY_ROUTE
  }
];

@Component({
  selector: 'app-tabs',
  template: `
            <div class="tw-h-16 lg:tw-h-[4.5rem] tw-shadow-lg tw-flex tw-relative tw-z-10">
              <ng-container *ngFor="let config of this.tabConfigurations">
                <app-tab class="tw-flex-grow" [config]="config"></app-tab>
              </ng-container>
            </div>
          `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  public readonly tabConfigurations = tabConfigurations;
}

