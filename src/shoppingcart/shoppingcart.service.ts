import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { Cart } from './shoppingcart';
import { Item } from './item';

@Injectable()
export class ShoppingCartService {
  getCart(): Cart {
    return this.cart;
  }

  private cart = new Cart();

  addToCart(selection: SelectItemDto): Cart {
    const item = new Item(
      selection.name,
      selection.price,
      selection.quantity,
      selection.id,
    );

    console.log('Service: item ', item);
    console.log('Service: cart ', this.cart);
    this.cart.addItem(item);

    console.log('Service after item added: ', this.cart.items)
    return this.cart;
  }
}
