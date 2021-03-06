/**
 * Created by jorgma on 2017-07-06.
 */
import {NgModule} from "@angular/core";
import {slDeparturesRouting} from "./sl-departure.routing";
import {SlDepartureComponent} from "./sl-departure.component";
import {HttpModule} from "@angular/http";
import {SlDepartureService} from "./sl-departure.service";
import {BrowserModule} from "@angular/platform-browser";
import { DeparturesFilter} from "../pipes/departuresFilter";


@NgModule({
  imports: [slDeparturesRouting, HttpModule, BrowserModule],
  exports: [SlDepartureComponent],
  declarations: [SlDepartureComponent, DeparturesFilter],
  providers: [SlDepartureService],
})
export class SlDepartureModule {
}
