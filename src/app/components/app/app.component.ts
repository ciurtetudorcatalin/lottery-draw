import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class='root-container'>
      <header>
        <app-tabs class="tw-block"></app-tabs>
      </header>
      <main></main>
    </div>
  `,
  styles: [`
      .root-container{
        height: 100%;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(min-content,max-content) 1fr;

      }
    `]
})
export class AppComponent { }
