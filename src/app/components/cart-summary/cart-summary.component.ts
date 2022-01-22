import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product) {
    try {
      this.cartService.removeFromCart(product);
      this.toastrService.warning(
        product.productName + 'sepetten silindi',
        'Silindi'
      );
    } catch (error) {
      this.toastrService.error(
        product.productName + ' sepetten silinirken bir hata oluştu',
        'HATA'
      );
      console.log(error);
    }
  }
}
