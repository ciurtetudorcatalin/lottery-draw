import { ExtraOptions, Routes } from "@angular/router";
import { environment } from "environments/environment";

export type ActiveRootRoute = typeof DRAW_ROUTE | typeof HISTORY_ROUTE;

export const DRAW_ROUTE = 'draw';
export const HISTORY_ROUTE = 'history';

export const APPLICATION_ROUTES: Routes = [
  {
    path: DRAW_ROUTE,
    loadChildren: () => import('@draw/draw.module').then(m => m.DrawModule)
  },
  {
    path: HISTORY_ROUTE,
    loadChildren: () => import('@history/history.module').then(m => m.HistoryModule)
  },
  { path: '', pathMatch: 'full', redirectTo: DRAW_ROUTE },
  { path: '**', redirectTo: DRAW_ROUTE },
]

export const ROOT_ROUTER_EXTRA_OPTIONS: ExtraOptions = {
  enableTracing: environment.enableTracing
}
