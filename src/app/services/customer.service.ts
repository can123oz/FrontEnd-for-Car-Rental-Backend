import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerGetUrl:string = "https://localhost:44349/api/Customers/GetAll";

  constructor(private httpClient:HttpClient) { }

  getAllCustomers():Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.customerGetUrl);
  }


}
