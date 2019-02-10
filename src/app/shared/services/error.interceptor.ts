import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _toastCtrl: ToastController,
    private _loadingController: LoadingController,
    private _router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {}, ((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            const toast = this._toastCtrl.create({
              message: 'Debe iniciar sesión.',
              duration: 3000,
              position: 'middle'
            });
            toast.then(t => t.present()).then(_ => {
              this._loadingController.dismiss();
              this._router.navigate(['/auth/login']);
            });
          }
          if (err.status === 422) {
            const toast = this._toastCtrl.create({
              message: 'Existe un error en los datos, verifique.',
              duration: 3000,
              position: 'middle'
            });
            toast.then(t => t.present()).then(_ => {
              this._loadingController.dismiss();
            });
          }
        }
      }))
    );
  }
}
