import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: any[] = [];
  productos: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getCategoriasProductos();
    this.getProductos();
  }

  getCategoriasProductos() {
    this.dataService.getCategoriasProductos().subscribe((data: any[]) => {
      this.categorias = data;
      console.log('ngOnInit() > items: %o', this.categorias);
    });
  }

  getProductos() {
    this.dataService.getAllProducts().subscribe((data: any[]) => {
      this.productos = data;
      console.log('ngOnInit() > items: %o', this.productos);
    });
  }

}
