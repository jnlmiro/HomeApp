/**
 * Created by jorgma on 2017-07-06.
 */
import {Routes, RouterModule} from '@angular/router';
import {SlDepartureComponent} from "./sl-departure.component";


export const routes: Routes = [
  {path: 'departures', component: SlDepartureComponent},
];

export const slDeparturesRouting = RouterModule.forChild(routes);
