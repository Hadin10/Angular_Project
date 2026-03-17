import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products = [
    {id: 1, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture1.png' },
    {id: 2, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture2.png' },
    {id: 2, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture2.png' },
    {id: 2, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture2.png' },
    {id: 3, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture3.png' },
    {id: 4, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture4.png' },
    {id: 5, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture5.png' },
    {id: 6, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture6.png' },
    {id: 7, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture7.png' },
    {id: 8, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture8.png' },
    {id: 9, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture9.png' },
    {id: 10, name: 'Product 111111111111', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture10.png' },
    
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
    alert('Added to cart: ' + product.name );
    // You can later integrate a CartService
  }
  constructor(private router:Router){}
  detailsCart(product: any) {
    this.router.navigate(['/product', product.id])
  }
}
