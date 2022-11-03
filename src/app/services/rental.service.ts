import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';
import { Rental } from '../models/rentals';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  getAllRentalUrl:string = "https://localhost:44349/api/Rentals/GetAll";

  getAllRentalDetailsUrl:string = "https://localhost:44349/api/Rentals/GetRentalDetail";

  constructor(private htppClient:HttpClient) { }
  
  getAllDetails() : Observable<ListResponseModel<RentalDetail>> {
    return this.htppClient.get<ListResponseModel<RentalDetail>>(this.getAllRentalDetailsUrl);
  }

}