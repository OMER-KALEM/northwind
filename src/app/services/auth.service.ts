import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  hostUrl = 'https://localhost:44321/';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let apiUrl = this.hostUrl + 'api/auth/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      apiUrl,
      loginModel
    );
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
