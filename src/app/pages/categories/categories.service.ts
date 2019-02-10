import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
      return this.http.get(ENDPOINT_URL + 'categories').pipe(
        map(this.processPostData, this)
      );
    }
  }

  processPostData(data: any[]) {
    this.categories = data.filter(res => res.slug !== 'sin-categoria');
    return this.categories;
  }
}
