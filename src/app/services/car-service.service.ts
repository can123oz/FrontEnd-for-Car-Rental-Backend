import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';


@Injectable({
  providedIn: 'root'
})

export class CarServiceService {

  getUrlCarDetail:string = "https://localhost:44349/api/Cars/GetCarDetails";
  constructor(private httpClient:HttpClient) { }

  getCarDetail():Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.getUrlCarDetail);
  }

}