import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlGetAllUsers:string = "";

  constructor(private httpClient : HttpClient) { }

  getAllUsers():Observable<UserResponseModel> {
    return this.httpClient.get<UserResponseModel>(this.urlGetAllUsers);
  }

}
