import { Injectable } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';

@Injectable()
export class ShoppingCartService {
  getItems(): string {
    return 'Hello Shopping Cart!';
  }

  addToCart(selection: SelectItemDto): any {
    const cart = {
      cart: {
        items: [
          {
            name: selection.name,
            price: selection.price,
            quantity: selection.quantity,
          },
        ],
        total: selection.price,
      },
    };

    return cart;
  }
}
