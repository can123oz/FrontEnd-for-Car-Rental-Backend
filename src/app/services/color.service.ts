import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl:string = "https://localhost:44349/api/colors/";

  constructor(private httpClient:HttpClient) { }

  getAllColor() : Observable<ListResponseModel<Color>> {
    let newUrl : string = this.apiUrl + "GetAll";
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }

  addColor(color : Color) : Observable<ResponseModel> {
    let newUrl : string = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newUrl,color);
  }

  updateColor(color:Color) : Observable<ResponseModel> {
    let newUrl : string = this.apiUrl + "update";
    return this.httpClient.put<ResponseModel>(newUrl, color);
  }

}
