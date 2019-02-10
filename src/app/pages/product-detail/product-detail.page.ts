import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  productID: number = 0;
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    this.productID = +this.activatedRoute.snapshot.paramMap.get('productID');
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productsService.getProduct(this.productID).subscribe((product: any) => {
      this.product = product;
      console.log(this.product);
    });
  }

}
