import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[],
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
}
const products = [
  {
    'id': 0,
    'title': 'Pierwszy produkt',
    'price': 24.99,
    'rating': 4.3,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Drugi produkt',
    'price': 64.99,
    'rating': 3.6,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Trzeci produkt',
    'price': 99.99,
    'rating': 3.5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['books']
  },
  {
    'id': 3,
    'title': 'Czwarty produkt',
    'price': 23.99,
    'rating': 4.9,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['books']
  },
  {
    'id': 4,
    'title': 'Piąty produkt',
    'price': 55.99,
    'rating': 4.5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['books']
  },
  {
    'id': 5,
    'title': 'Szósty produkt',
    'price': 17.99,
    'rating': 5.0,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consetetur adipscing elit',
    'categories': ['books']
  },
];

