import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  categoryID: number = 0;
  products: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    this.categoryID = +this.activatedRoute.snapshot.paramMap.get('categoryID');
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(page: number = 1) {
    this.productsService.getProducts(this.categoryID, page).subscribe((res: any[]) => {
      console.log(res);
      this.products = res;
    })
  }

}
