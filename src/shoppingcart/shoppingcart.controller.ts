import { Controller, Get } from '@nestjs/common';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get('items')
  getItems(): string {
    return this.shoppingCartService.getItems();
  }
}
