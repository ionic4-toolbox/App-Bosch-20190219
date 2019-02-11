import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  Categories: any[] = [];
  productos: any[] = [];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.loadCategories();
    // this.getProductos();
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe((data: any[]) => {
      this.Categories = data;
      console.log('ngOnInit() > items: %o', this.Categories);
    });
  }

  loadProducts(id: number) {
    
  }

  // getProductos() {
  //   this.dataService.getAllProducts().subscribe((data: any[]) => {
  //     this.productos = data;
  //     console.log('ngOnInit() > items: %o', this.productos);
  //   });
  // }

}
