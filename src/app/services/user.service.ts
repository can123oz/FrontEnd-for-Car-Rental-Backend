import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlGetAllUsers:string = "";

  constructor(private httpClient : HttpClient) { }

  getAllUsers():Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(this.urlGetAllUsers);
  }

}
