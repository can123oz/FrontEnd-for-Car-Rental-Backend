import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  getAllRentalUrl:string = "https://localhost:44349/api/Rentals/GetAll";

  constructor(private htppClient:HttpClient) { }

}