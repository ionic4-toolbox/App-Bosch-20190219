import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const ENDPOINT_URL = environment.endpointURL;
@Injectable({
  providedIn: 'root'
})
export class UserInstallationsService {

  installations: any[];

  constructor(
    private http: HttpClient
  ) { }

  getUserInstallations(idAuthor: number) {
    if (this.installations) {
      return of(this.installations);
    }
    return this.http.get(ENDPOINT_URL + 'instalacion?author=' + idAuthor).pipe(
      map((i: any) => this.installations = i)
    );
  }
}
