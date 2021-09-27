import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { Cart } from './shoppingcart';
import { Item } from './item';

@Injectable()
export class ShoppingCartService {
  getItems(): string {
    return 'Hello Shopping Cart!';
  }

  private cart = new Cart();

  addToCart(selection: SelectItemDto): Cart {

    console.log('Cart: ', this.cart)
    const item = new Item(
      selection.name,
      selection.price,
      selection.quantity,
      selection.id,
      );

    this.cart.addItem(item);

    return this.cart;
  }
}
