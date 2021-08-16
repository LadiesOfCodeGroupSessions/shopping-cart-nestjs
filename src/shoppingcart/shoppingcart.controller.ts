import { Controller, Get } from '@nestjs/common';
import { ShoppingCartService } from './shoppingcart.service';

@Controller()
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  getHello(): string {
    return this.shoppingCartService.getHello();
  }
}
