import { NumberDrawComponent } from './../components/number-draw/number-draw.component';
import { Routes } from "@angular/router";

export const DRAW_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: NumberDrawComponent },
  { path: '**', redirectTo: '' },
]
