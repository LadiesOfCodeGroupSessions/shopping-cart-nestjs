import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shoppingcart.controller';
import { ShoppingCartService } from './shoppingcart.service';
import { SelectItemDto } from './select-item.dto';
import { Cart } from './shoppingcart';
import { Item } from './item';

describe('ShoppingCartController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [ShoppingCartService],
    }).compile();
  });

  describe('getCart', () => {
    it('should return items in the cart', () => {
      const shoppingCartController = app.get<ShoppingCartController>(
        ShoppingCartController,
      );

      const t = new SelectItemDto();
      t.id = 1;
      t.name = 'test';
      t.price = 1;
      t.quantity = 1;

      const result_cart = new Cart();
      const item = new Item('test', 1, 1, 1);
      result_cart.items.push(item);
      result_cart.total = 1;

      const expected_result = { cart: result_cart };

      const cart = shoppingCartController.addToCart(t);

      // console.log(cart.items[0] as Item);
      // const user: User = JSON.parse(json)

      // expect(shoppingCartController.addToCart).toHaveBeenCalled();
      expect(cart).toEqual(expected_result);
      // expect(cart.items[0].name).toBe('test');
    });
  });
});
