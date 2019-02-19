import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { StorageService, StorageValues } from 'src/app/shared/services/storage.service';

const ENDPOINT_URL = environment.endpointURL;
@Injectable({
  providedIn: 'root'
})
export class UserInstallationsService {

  installations: any[];

  constructor(
    private http: HttpClient,
    private helpersServices: HelpersService,
    private storageService: StorageService
  ) { }

  async getUserInstallations() {
    if (this.installations) {
      return of(this.installations);
    }

    const token = await this.storageService.getIonic('token');
    const idAuthor = this.helpersServices.decodeToken(token).data.user.id;

    return this.http.get(ENDPOINT_URL + 'instalacion?author=' + idAuthor).pipe(
      map((i: any) => this.installations = i)
    );
  }
}
