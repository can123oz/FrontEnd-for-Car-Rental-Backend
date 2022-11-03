import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiGetUrl:string = "https://localhost:44349/api/colors/GetAll";

  constructor(private httpClient:HttpClient) { }

  getAllColor() : Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiGetUrl);
  }

}
