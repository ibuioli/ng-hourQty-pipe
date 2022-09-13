import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourQty'
})
export class HourQtyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const sec = value * 3600;
    const hours = Math.floor(sec / 3600);
    const min = Math.floor((sec - (hours * 3600)) / 60);

    return String(hours).padStart(2, '0') + ':' + String(min).padStart(2, '0');
  }

}
