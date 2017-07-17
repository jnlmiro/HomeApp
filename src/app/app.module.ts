import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MaterializeModule} from "angular2-materialize";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {appRouting} from "./app.routing";
import {EntryBoardModule} from "./entry-board/entry-board.module";
import {SlDepartureModule} from "./sl/sl-departure.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    EntryBoardModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
