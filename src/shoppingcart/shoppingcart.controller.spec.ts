import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shoppingcart.controller';
import { ShoppingCartService } from './shoppingcart.service';
import { SelectItemDto } from './select-item.dto';

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

      const cart = shoppingCartController.addToCart(t);

      expect(cart.total).toBe(1);
      expect(cart.items.length).toBe(1);
    });
  });
});
