/**
 * Created by jorgma on 2017-07-06.
 */
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found.component";
import {EntryBoardComponent} from "./entry-board/entry-board.component";


export const routes: Routes = [

  { path: '',
    redirectTo: 'entry-board',
    pathMatch: 'full'
  },
  {
    path: 'entry-board',
    component:EntryBoardComponent
  },

  {path: '**', component:PageNotFoundComponent},
];

export const appRouting = RouterModule.forRoot(routes,  { useHash: true });
