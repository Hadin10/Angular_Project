import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  discount?: number;
  unit: string;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  // Public readable signals
  items = this.cartItems.asReadonly();

  totalCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity + 80, 0)
  );

  addToCart(product: Omit<CartItem, 'quantity'>) {
    this.cartItems.update((items) => {
      const existing = items.find((i) => i.id === product.id);
      if (existing) {
        alert(product.name + " is already exist");
        return [...items];
      }
      alert(product.name + " is Added");
      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(id: number) {
    this.cartItems.update((items) => items.filter((i) => i.id !== id));
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    this.cartItems.update((items) =>
      items.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
