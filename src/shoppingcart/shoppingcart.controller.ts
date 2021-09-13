import { Body, Controller, Get, Put } from '@nestjs/common';
import { SelectItemDto } from './select-item.dto';
import { ShoppingCartService } from './shoppingcart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get('items')
  getItems(): string {
    return this.shoppingCartService.getItems();
  }

  @Put()
  addToCart(@Body() SelectItemDto: SelectItemDto): any {
    let foo = this.shoppingCartService.addToCart(SelectItemDto);
    console.log('FOO ', foo)
    return foo
  }
}
