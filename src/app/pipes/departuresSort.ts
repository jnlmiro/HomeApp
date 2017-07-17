/**
 * Created by jorgma on 2017-07-09.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {Departure} from "../sl/sl-departure.model";

@Pipe({
  name: 'sortDepartures'
})

export class DeparturesSort implements PipeTransform {

  private transformDisplayTimes(time: string) {
    if (time !== 'Nu') {
      return parseInt(time.replace(':', '').replace(' min', ''));
    }
    return time;
  }

  transform(array: Array<Departure>): Array<Departure> {
    array.sort((a: Departure, b: Departure) => {
      if (this.transformDisplayTimes(a.displayTime) < this.transformDisplayTimes(b.displayTime)) {
        return -1
      }

      else if (this.transformDisplayTimes(a.displayTime) > this.transformDisplayTimes(b.displayTime)) {
        return 1
      }
      else {
        return 0;
      }
    });

    let departuresNow = array.filter((el) => {
      return el.displayTime === 'Nu';
    });

    let departuresLater = array.filter((el) => {
      return el.displayTime !== 'Nu';
    });
    console.log(departuresNow.concat(...departuresLater));
    return departuresNow.concat(...departuresLater);
  }
}
