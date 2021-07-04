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
            <div class="tw-h-16 tw-shadow-lg tw-flex">
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

