import { Body, Controller, Get, Put } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  getCart(): any {
    const cart = this.shoppingCartService.getCart();
    return { cart: cart };
  }

  @Put()
  addToCart(@Body() SelectItemDto: SelectItemDto): any {
    const item = this.shoppingCartService.addToCart(SelectItemDto);
    return { cart: item };
  }
}
