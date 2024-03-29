import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductService) { }

  ngOnInit(): void {
    const prodId: number = parseInt(this._route.snapshot.params['productId']);
    this.product = this._productService.getProductById(prodId)
  }

}
