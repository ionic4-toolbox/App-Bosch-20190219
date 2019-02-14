import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { StorageService, StorageValues } from 'src/app/shared/services/storage.service';
import { of } from 'rxjs';
import { HelpersService } from 'src/app/shared/services/helpers.service';

const ENDPOINT_URL = environment.loginURL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private helpers: HelpersService
  ) { }

  login(username: string, password: string) {
    const user = { username: username, password: password };
    return this.http.post(ENDPOINT_URL, user).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  setSession(authResult) {
    this.storageService.set('token', authResult.token, StorageValues.IONIC);
  }

  logout() {
    
  }

}
