import { Test, TestingModule } from '@nestjs/testing';
import { Cart } from '../../src/domain/shoppingcart';
import { ShoppingCartController } from './shoppingcart.controller';
import { ShoppingCartService } from './shoppingcart.service';

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
      expect(shoppingCartController.getCart() instanceof Cart).toBe(true);
    });
  });
});
