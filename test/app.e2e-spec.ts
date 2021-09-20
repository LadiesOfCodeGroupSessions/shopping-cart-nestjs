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

describe('ShoppingCartController (e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ShoppingCartModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cart/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/cart/items')
      .expect(200)
      .expect('Hello Shopping Cart!');
  });

  it('/cart (PUT)', async () => {
    const result = await request(app.getHttpServer())
      .put('/cart')
      .send({ id: '123', name: 'apple', price: 3, quantity: 1 });

    expect(result.status).toEqual(200);
    expect(result.body.cart.items[0].quantity).toEqual(1);
    expect(result.body.cart.total).toEqual(3);
  });

  // it('/cart (PUT) 2', async () => {
  //   await request(app.getHttpServer())
  //     .put('/cart')
  //     .send({ id: '123', name: 'apple', price: 3, quantity: 1 });

  //   const result = await request(app.getHttpServer())
  //     .put('/cart')
  //     .send({ id: '123', name: 'apple', price: 3, quantity: 1 });

  //   expect(result.status).toEqual(200);
  //   expect(result.body.cart.items[0].quantity).toEqual(2);
  //   expect(result.body.cart.total).toEqual(6);
  // });
});
