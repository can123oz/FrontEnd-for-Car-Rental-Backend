import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

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
    //console.log(brand);
    return this.httpClient.post<ResponseModel>(newUrl,brand);
  }

  updateBrand(brand:Brand):Observable<ResponseModel> {
    console.log("brand updated: ", brand);
    let newUrl : string = this.apiUrl + "update";
    return this.httpClient.put<ResponseModel>(newUrl,brand);
  }

  getBrandById(brandId:Number):Observable<DetailResponseModel<Brand>> {
    let newUrl: string = this.apiUrl + "getbyid/" + brandId;
    return this.httpClient.get<DetailResponseModel<Brand>>(newUrl);
  }
}
