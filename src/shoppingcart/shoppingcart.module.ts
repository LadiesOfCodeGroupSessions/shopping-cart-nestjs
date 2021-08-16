import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shoppingcart.controller';
import { ShoppingCartService } from './shoppingcart.service';

@Module({
  imports: [],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
