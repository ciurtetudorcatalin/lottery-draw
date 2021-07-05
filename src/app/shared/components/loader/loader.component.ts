import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoadersCSS } from 'ngx-loaders-css';

@Component({
  selector: 'app-loader',
  template: `
    <div class="tw-w-full tw-h-full tw-relative tw-flex">
      <div class="tw-m-auto">
        <loaders-css [loader]="this.loader" [scale]="1.5" [color]="this.color"></loaders-css>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent{

  public readonly loader: LoadersCSS = 'ball-spin-fade-loader';
  public readonly color = 'rgba(16, 185, 129)';

}
