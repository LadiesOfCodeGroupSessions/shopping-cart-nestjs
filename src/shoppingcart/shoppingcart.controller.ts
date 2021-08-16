import { Controller, Get, Put } from '@nestjs/common';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get('items')
  getItems(): string {
    return this.shoppingCartService.getItems();
  }

  @Put()
  addToCart(): string {
    return this.shoppingCartService.addToCart();
  }
}
