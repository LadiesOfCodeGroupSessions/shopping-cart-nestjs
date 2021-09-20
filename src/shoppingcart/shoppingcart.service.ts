import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { Cart } from './shoppingcart';
import { Item } from './item';

@Injectable()
export class ShoppingCartService {
  getItems(): string {
    return 'Hello Shopping Cart!';
  }

  private items: Item[] = [];

  addToCart(selection: SelectItemDto): Cart {
    const cart = new Cart();
    console.log('Cart: ', cart)
    const item = new Item(
      selection.name,
      selection.price,
      selection.quantity,
      selection.id,
      );
      
      console.log('Item: ', item)

    cart.addItem(item);

    return cart;
  }
}
