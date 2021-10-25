import { Body, Controller, Get, Put } from '@nestjs/common';
import { Cart } from './shoppingcart';
import { SelectItemDto } from './select-item.dto';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  getCart(): any {
    const cart = this.shoppingCartService.getCart();

    console.log('in the controller: ', cart);

    return { cart: cart };
  }

  @Put()
  addToCart(@Body() SelectItemDto: SelectItemDto): any {
    console.log('PUT select item DTO: ', SelectItemDto);

    const foo = this.shoppingCartService.addToCart(SelectItemDto);
    return { cart: foo };
  }
}
