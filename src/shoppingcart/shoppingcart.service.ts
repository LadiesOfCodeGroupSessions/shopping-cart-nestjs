import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';

@Injectable()
export class ShoppingCartService {
  getItems(): string {
    return 'Hello Shopping Cart!';
  }

  addToCart(selection: SelectItemDto): any {
    let cart: {
      items: [
        {
          name: 'apple',
          price: 1,
          quantity: 1
        }
      ]
    };

    return cart;
  }
}
