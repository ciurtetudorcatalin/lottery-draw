import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AssetsProviderService } from '@core/services/assets-provider.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-error-prompt',
  template: `
    <app-prompt [heading]="this.heading"
                [paragraph]="this.paragraph"
                [imageSrc]="this.imageSrc">
      <ng-container customPromptContent>
        <div class="tw-mt-8 tw-text-center">
          <button #retryBtn class="btn btn-primary tw-w-36 tw-inline-flex tw-justify-evenly">
            <fa-icon icon="redo-alt"></fa-icon>
            <span>Retry</span>
          </button>
        </div>
      </ng-container>
    </app-prompt>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPromptComponent implements OnInit {

  @ViewChild('retryBtn', { static: true })
  private retryBtn!: ElementRef<HTMLButtonElement>;

  public readonly heading = 'Request Error';
  public readonly paragraph = 'There was an error while processing your request';
  public readonly imageSrc;

  @Output()
  public retrySignal = new EventEmitter<void>();

  constructor(assetsProvider: AssetsProviderService) {
    this.imageSrc = assetsProvider.getAsset('prompts', 'error.webp');
  }

  ngOnInit(): void {
    this.initRetrySignal();
  }

  private initRetrySignal(): void {
    fromEvent(this.retryBtn.nativeElement, 'click').pipe(
      tap(_ => this.retrySignal.emit()),
      untilDestroyed(this)
    ).subscribe();
  }

}
