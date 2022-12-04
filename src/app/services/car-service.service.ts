import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responsemodel';

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

  getCarDetailById(carId:Number) :Observable<DetailResponseModel<CarDetail>> {
    let newUrl : string = this.baseUrl +"Cars/GetCarDetailsById?id=" +carId;
    return this.httpClient.get<DetailResponseModel<CarDetail>>(newUrl);
  }

  getCarImagesById(carId:Number) : Observable<ListResponseModel<CarImage>> {
    let newUrl : string = this.baseUrl + "Cars/GetCarImagesByCarId?id=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }

  rentCar(carId: number, userId:number) :Observable<ResponseModel> {
    console.log(carId,userId);
    let newUrl : string = this.baseUrl + "Rentals/Add";
    return this.httpClient.post<ResponseModel>(newUrl,{
      carId: carId,
      userId: userId
    });
  }

  addCar(car : Car) : Observable<ResponseModel> {
    let newUrl : string = this.baseUrl + "cars/add";
    return this.httpClient.post<ResponseModel>(newUrl,car);
  }

  updateCar(car: Car) : Observable<ResponseModel> {
    let newUrl : string = this.baseUrl + "cars/update";
    return this.httpClient.put<ResponseModel>(newUrl,car);
  }
}