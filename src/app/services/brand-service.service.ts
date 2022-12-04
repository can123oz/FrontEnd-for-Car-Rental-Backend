import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responsemodel';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  apiUrl:string = "https://localhost:44349/api/brands/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newUrl :string = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

  addBrand(brand:Brand):Observable<ResponseModel> {
    let newUrl : string = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newUrl,brand);
  }

  updateBrand(brand:Brand):Observable<ResponseModel> {
    let newUrl : string = this.apiUrl + "update";
    return this.httpClient.put<ResponseModel>(newUrl,brand);
  }
}
