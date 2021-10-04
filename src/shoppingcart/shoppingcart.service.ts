import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { Cart } from '../domain/shoppingcart';
import { Item } from '../domain/item';

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

    this.cart.addItem(item);

    return this.cart;
  }
}
