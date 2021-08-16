// describe('GET /items', () => {
//
//   it('returns items', async () => {
//     const result = await request.get('/items')
//     expect(result.status).toEqual(200)
//     expect(result.body.items[0].name).toEqual('apples')
//   })
// })

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

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const shoppingCartController = app.get<ShoppingCartController>(
        ShoppingCartController,
      );
      expect(shoppingCartController.getHello()).toBe('Hello World!');
    });
  });
});
