import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { ProductDetails } from './features/home/pages/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Home },   // default first page
  {path: 'product/:id', component: ProductDetails},



  { path: '**', redirectTo: '' },   // fallback route
];