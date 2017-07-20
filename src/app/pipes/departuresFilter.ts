/**
 * Created by jorgma on 2017-07-09.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {Group} from "../sl/sl-departure.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filterDepartures'
})

export class DeparturesFilter implements PipeTransform {
  transform(departureGroups: Group[], groupType: string): any {
    if (isNullOrUndefined(groupType))
      return departureGroups;
    else {
      return departureGroups.filter((group) => group.type === groupType)
    }
  }
}
