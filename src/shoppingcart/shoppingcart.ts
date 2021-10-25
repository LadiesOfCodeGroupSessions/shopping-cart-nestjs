import { Item } from './item';

export class Cart {
  public items: Item[] = [];
  private id: string;
  /*eslint-disable */
  public total: number = 0;
  /*eslint-enable */

  public addItem(item: Item) {
    const filteredItems = this.items.filter((i) => i.name === item.name);

    if (filteredItems.length === 0) {
      this.items.push(item);
      // console.log('Added: ', item, this.total);
    } else {
      // console.log('QUANTITY BEFORE', item.name, filteredItems[0].quantity);
      filteredItems[0].quantity += item.quantity;
      // console.log('QUANTITY', item.name, filteredItems[0].quantity);
    }
    this.total += item.quantity * item.price;
  }
}
