import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: any[];

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    if (this.categories) {
      return of(this.categories);
    } else {
      return this.http.get(ENDPOINT_URL + 'categories');
    }
  }
}
