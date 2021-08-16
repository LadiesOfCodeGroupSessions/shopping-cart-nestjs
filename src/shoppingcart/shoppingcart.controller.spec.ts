import { Test, TestingModule } from '@nestjs/testing';
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

  describe('getItems', () => {
    it('should return "Hello Shopping Cart!"', () => {
      const shoppingCartController = app.get<ShoppingCartController>(
        ShoppingCartController,
      );
      expect(shoppingCartController.getItems()).toBe('Hello Shopping Cart!');
    });
  });
});
