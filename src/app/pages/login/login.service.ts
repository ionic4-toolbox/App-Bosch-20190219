import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const ENDPOINT_URL = environment.loginURL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    const user = { username: username, password: password };
    return this.http.post(ENDPOINT_URL, user);
  }
}
