import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(value: CarDetail[], brandFilter:string): CarDetail[] {
    brandFilter = brandFilter ? brandFilter.toLocaleLowerCase():"";
    return brandFilter ? value
     .filter(params => params.brandName.toLocaleLowerCase().indexOf(brandFilter) !== -1):value;
  }
}