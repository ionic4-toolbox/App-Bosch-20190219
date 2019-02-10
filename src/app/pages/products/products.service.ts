import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[];

  constructor(
    private http: HttpClient
  ) { }

  getProduct(productID: number) {
    if (this.products) {
      return of(this.products.find(p => p.id === productID));
    } else {
      return this.http.get(ENDPOINT_URL + 'producto/' + productID);
    }
  }

  getProducts(categoryID: number, page: number) {
    if (this.products) {
      return of(this.products);
    } else {
      return this.http.get(ENDPOINT_URL + 'producto?categories=' + categoryID + '&page=' + page);
    }
  }
}
