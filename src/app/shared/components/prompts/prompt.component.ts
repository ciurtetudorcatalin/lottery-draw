import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-prompt',
  template: `
     <div class="tw-w-full tw-h-full">
      <div class="tw-max-w-[370px] tw-my-8 tw-mx-auto">
        <div class="tw-flex tw-justify-center tw-items-center tw-px-20">
          <img class="tw-w-full tw-h-auto" [src]="this.imageSrc" alt="prompt-icon"/>
        </div>

        <h4 class="tw-font-bold tw-text-xl lg:tw-text-4xl
    tw-text-center">
          {{this?.heading}}
        </h4>
        <p class="tw-text-center tw-mt-6 lg:tw-text-base">
          {{this?.paragraph}}
        </p>
        <ng-content select="[customPromptContent]">
        </ng-content>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromptComponent {

  @Input()
  public imageSrc: string | undefined;

  @Input()
  public heading: string | undefined;

  @Input()
  public paragraph: string | undefined;

}
