import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm {
  cartService = inject(CartService);
  private router = inject(Router);

  name = '';
  address = '';
  mobile = '';

  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  errorMessage = signal('');

  async onSubmit() {
    if (!this.name.trim() || !this.address.trim() || !this.mobile.trim()) {
      this.errorMessage.set('Please fill in all fields.');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    const cartItems = this.cartService.items();
    const itemLines = cartItems.length
      ? cartItems
          .map(
            (item) =>
              `• (${item.name} x${item.quantity}) + Delivery = ৳${item.price * item.quantity} + ${item.quantity*80} = ৳${(item.price * item.quantity) + (item.quantity * 80)}`
          )
          .join('\n')
      : '(Direct order - no cart items)';

    const totalPrice = this.cartService.totalPrice();
    const orderDate = new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' });
    const orderId = Math.floor(Math.random() * (1000000000 - 100) + 500);

    const message = `
                    ===========================
                          NEW ORDER RECEIVED
                    ===========================
                    Order ID   : ${orderId}
                    Date       : ${orderDate}
                    ---------------------------
                    CUSTOMER INFO
                    ---------------------------
                    Name       : ${this.name}
                    Mobile     : ${this.mobile}
                    Address    : ${this.address}
                    ---------------------------
                    ORDER ITEMS
                    ---------------------------
                    ${itemLines}
                    ---------------------------
                    TOTAL      : ৳${totalPrice}
                    ===========================
                        `.trim();

    const emailPayload = {
      service_id: 'service_4h4fxxo',
      template_id: 'template_9kvqpin',
      user_id: 'EGm8ZRtC6SV8CyyIn',
      template_params: {
        title: orderId,
        message: message,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPayload),
      });

      if (response.ok) {
        this.submitStatus.set('success');
        this.cartService.clearCart();
      } else {
        const text = await response.text();
        throw new Error(text || 'Email send failed');
      }
    } catch (err: any) {
      this.submitStatus.set('error');
      this.errorMessage.set(err.message || 'Something went wrong. Please try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }
}
