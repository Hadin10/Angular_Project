import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);
  cartService = inject(CartService);

  products = [
    { id: 1,  name: 'সুন্দরবনের মধু',  price: 1250, discount: 1400, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture1.png' },
    { id: 2,  name: 'সরিষা ফুলের মধু',  price: 1000, discount: 800, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture2.png' },
    { id: 3,  name: 'হানি নাটস',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture3.png' },
    { id: 4,  name: 'কাজু বাদাম',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture4.png' },
    { id: 5,  name: 'কাঠ বাদাম',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture5.png' },
    { id: 6,  name: 'পেস্তা বাদাম',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture6.png' },
    { id: 7,  name: 'চিনা বাদাম',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture7.png' },
    { id: 8,  name: 'আখরোট',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture8.png' },
    { id: 9,  name: 'সরিষার তেল',  price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture9.png' },
    { id: 10, name: 'চিয়া সিড', price: 50, discount: 60, unit: 'kg', rating: Array.from({ length: 5 }), image: 'images/picture10.png' },
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  orderNow(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate(['/order']);
  }

  detailsCart(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
