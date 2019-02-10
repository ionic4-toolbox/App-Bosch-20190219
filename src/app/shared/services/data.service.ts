import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categorias_productos: any[];
  productos: any[];

  constructor(
    private http: HttpClient
  ) { }

  getCategoriasProductos(): any {
    if (this.categorias_productos) {
        return of(this.categorias_productos);
    } else {
        return this.http.get(ENDPOINT_URL + 'categories')
        .pipe(
          map(this.processPostData, this)
        );
    }
  }

  processPostData(data: any[]) {
    // Do post-processing code here (if useful)
    this.categorias_productos = data.filter(res => res.slug !== 'sin-categoria');
    return this.categorias_productos;
  }

  getAllProducts(): any {
    if (this.productos) {
      return of(this.productos);
    } else {
      return this.http.get(ENDPOINT_URL + 'producto?per_page=100');
    }
  }

}
