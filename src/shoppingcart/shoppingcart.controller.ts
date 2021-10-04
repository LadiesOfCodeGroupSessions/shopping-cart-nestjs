import { Body, Controller, Get, Put } from '@nestjs/common';
import { Cart } from '../../src/domain/shoppingcart';
import { SelectItemDto } from './select-item.dto';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get('cart')
  getCart(): Cart {
    return this.shoppingCartService.getCart();
  }

  @Put()
  addToCart(@Body() SelectItemDto: SelectItemDto): any {
    const foo = this.shoppingCartService.addToCart(SelectItemDto);
    return { cart: foo };
  }
}
