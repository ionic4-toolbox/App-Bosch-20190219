import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { StorageService, StorageValues } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _storageService: StorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this._storageService.get('token', StorageValues.IONIC)
      .pipe(
        mergeMap(token => {
          if (token) {
            const clone = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + JSON.parse(token))
            });

            return next.handle(clone);

          } else {
            return next.handle(req);
          }
        })
      );
  }
}
