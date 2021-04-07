
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daycreated'
})
export class DaycreatedPipe implements PipeTransform {

  transform(value: any): any {
    let firstDate: Date = new Date(value)
    let firstDateWithNoTime: any = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    let currentDate: Date = new Date();
    let todayWithNoTime: any = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
    let timeDifferenceSeconds = Math.round(Math.abs((todayWithNoTime - firstDateWithNoTime) / 1000));
    let days = Math.round(Math.abs((timeDifferenceSeconds) / 86400))

    return days;
  }

}
