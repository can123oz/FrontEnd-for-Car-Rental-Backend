import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  baseUrl:string = "https://localhost:44349/api/";
 
  constructor(private htppClient:HttpClient) { }
  
  getAllDetails() : Observable<ListResponseModel<RentalDetail>> {
    let newUrl : string = this.baseUrl + "Rentals/GetRentalDetail";
    return this.htppClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }

  getCarStatus(carId : number) :Observable<boolean> {
    let newUrl : string = this.baseUrl + "Rentals/CarStatus?carId="+carId;
    return this.htppClient.get<boolean>(newUrl);
  }

  returnCar(carId: number, userId:number) :Observable<any> {
    let newUrl : string = this.baseUrl + "Rentals/returncar";
    return this.htppClient.post(newUrl,{carId:carId,userId:userId});
  }

}