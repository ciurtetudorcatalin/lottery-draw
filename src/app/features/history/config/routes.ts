import { Routes } from "@angular/router";
import { HistoryComponent } from "@history/components/history/history.component";



export const HISTORY_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HistoryComponent },
  { path: '**', redirectTo:'' },
];
