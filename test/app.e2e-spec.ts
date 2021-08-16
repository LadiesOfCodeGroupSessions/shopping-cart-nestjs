import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { ShoppingCartModule } from './../src/shoppingcart/shoppingcart.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

// describe('GET /items', () => {
//
//   it('returns items', async () => {
//     const result = await request.get('/items')
//     expect(result.status).toEqual(200)
//     expect(result.body.items[0].name).toEqual('apples')
//   })
// })

describe('ShoppingCartController (e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ShoppingCartModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  })

  it('/cart/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/cart/items')
      .expect(200)
      .expect('Hello Shopping Cart!');
  });
});