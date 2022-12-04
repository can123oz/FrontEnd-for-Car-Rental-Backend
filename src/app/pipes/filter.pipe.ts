import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { CarDetail } from '../models/carDetail';
import { Color } from '../models/color';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarDetail[], color:Color, brand:Brand): CarDetail[] {
    let colorFilter : string = color.name;
    let brandFilter : string = brand.name;
    console.log("brandname",brandFilter);
    console.log("colorname",colorFilter);
    colorFilter = colorFilter ? colorFilter.toLocaleLowerCase() : "";
    brandFilter = brandFilter ? brandFilter.toLocaleLowerCase() : "";
    let result : CarDetail[];
    if (colorFilter && brandFilter) {
      result = value.filter(params => params.colorName
        .toLocaleLowerCase().indexOf(colorFilter) !== -1).filter(params => params
          .brandName.toLocaleLowerCase().indexOf(brandFilter) !== -1)
      return result;
    }
    return value;
  }

}
