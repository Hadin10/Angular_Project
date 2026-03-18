import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Cart } from './features/cart/pages/cart/cart';
import { ProductDetails } from './features/product-details/pages/product-details/product-details';
import { OrderForm } from './features/order-form/pages/order-form/order-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'order', component: OrderForm },
  { path: '**', redirectTo: '' },
];
