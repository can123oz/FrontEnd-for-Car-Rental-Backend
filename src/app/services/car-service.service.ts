import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarServiceService {

  baseUrl:string = "https://localhost:44349/api/";
  constructor(private httpClient:HttpClient) { }
  
  getCarDetail():Observable<ListResponseModel<CarDetail>> {
    let newUrl : string = this.baseUrl + "Cars/GetCarDetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl);
  }

  getCarsByColor(colorId:Number):Observable<ListResponseModel<CarDetail>> {
    let newUrl : string  = this.baseUrl + "Cars/GetByColor?id="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl);
  }

  getCarsByBrand(brandId:Number):Observable<ListResponseModel<CarDetail>> {
    let newUrl : string = this.baseUrl + "Cars/GetByBrand?id="+brandId;
    console.log(newUrl);
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl);
  }
}