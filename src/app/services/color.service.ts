import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiGetUrl:string = "https://localhost:44349/api/colors/GetAll";

  constructor(private httpClient:HttpClient) { }

  getAllColor() : Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiGetUrl);
  }

}