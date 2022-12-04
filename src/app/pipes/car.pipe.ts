import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: CarDetail[], carNameFilter: string): CarDetail[] {
    carNameFilter = carNameFilter ? carNameFilter.toLocaleLowerCase():"";
    return carNameFilter ? value
    .filter(params => params.carName.toLocaleLowerCase().indexOf(carNameFilter) !== -1):value;
  }

}
