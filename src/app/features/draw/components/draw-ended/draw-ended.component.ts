import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-draw-ended',
  templateUrl: './draw-ended.component.html',
  styleUrls: ['./draw-ended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawEndedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
