import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: CarDetail[], colorFilter: string): CarDetail[] {
    colorFilter = colorFilter ? colorFilter.toLocaleLowerCase():"";
    return colorFilter ? value
    .filter(params => params.colorName.toLocaleLowerCase().indexOf(colorFilter) !== -1) : value;
  }
}