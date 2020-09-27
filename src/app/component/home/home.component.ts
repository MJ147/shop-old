import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
}
