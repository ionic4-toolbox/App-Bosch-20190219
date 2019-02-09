import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.page.html',
  styleUrls: ['./Categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  Categories: any[] = [];
  productos: any[] = [];

  constructor(
    private categories: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategoriesProductos();
    // this.getProductos();
  }

  getCategoriesProductos() {
    this.categories.getCategories().subscribe((data: any[]) => {
      this.Categories = data;
      console.log('ngOnInit() > items: %o', this.Categories);
    });
  }

  // getProductos() {
  //   this.dataService.getAllProducts().subscribe((data: any[]) => {
  //     this.productos = data;
  //     console.log('ngOnInit() > items: %o', this.productos);
  //   });
  // }

}
