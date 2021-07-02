import { ExtraOptions, Routes } from "@angular/router";
import { environment } from "environments/environment";

export const APPLICATION_ROUTES: Routes = [
  {
    path: 'draw',
    loadChildren: () => import('@draw/draw.module').then(m => m.DrawModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@history/history.module').then(m => m.HistoryModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'draw' },
  { path: '**', redirectTo: 'draw' },
]

export const ROOT_ROUTER_EXTRA_OPTIONS: ExtraOptions = {
  enableTracing: environment.enableTracing
}
