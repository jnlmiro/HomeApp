/**
 * Created by jorgma on 2017-07-08.
 */
import {NgModule} from '@angular/core';
import {EntryBoardComponent} from "./entry-board.component";
import {SlDepartureModule} from "../sl/sl-departure.module";
import {ClockModule} from "../clock/clock.module";
import {WeatherModule} from "../weather/weather.module";


@NgModule({
  imports: [SlDepartureModule, ClockModule, WeatherModule],
  exports: [],
  declarations: [EntryBoardComponent],
  providers: [],
})
export class EntryBoardModule {
}
