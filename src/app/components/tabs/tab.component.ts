import { ElementRef, Input, ViewChild, Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ActiveRootRoute } from '@config/routes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-tab',
  template: `
              <div #tab class="tab" [class.active]="this.isActive">
                <div class="tab-content">
                  <fa-icon [icon]="this.config.icon" size="lg"></fa-icon>
                  <a>{{this.config.text}}</a>
                </div>
              </div> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {

  @ViewChild('tab', { static: true })
  private tab!: ElementRef<HTMLDivElement>;

  @Input()
  public config!: TabConfig;

  private active: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initNavigation();
    this.initStateListener();
  }

  private initStateListener() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => (event as NavigationEnd).url),
        map(url => url.split('/')),
        map(urlSegments => urlSegments.includes(this.config.route)),
        untilDestroyed(this)
      )
      .subscribe({
        next: value => { this.active = value; this.changeDetector.detectChanges();}
      });
  }

  private initNavigation() {
    fromEvent(this.tab.nativeElement, 'click')
      .pipe(
        mapTo(this.config.route),
        untilDestroyed(this))
      .subscribe({
        next: route => this.router.navigate([route], { relativeTo: this.activatedRoute })
      });
  }

  public get isActive(): boolean {
    return this.active;
  }

}


export interface TabConfig {
  text: string;
  icon: IconProp;
  route: ActiveRootRoute;
}
