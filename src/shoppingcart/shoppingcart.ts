import { Item } from './Item';

export class Cart {
  private items: Item[] = [];
  private id: string;
  private total: number = 0

  public addItem(item: Item) {
    const filteredItems = this.items.filter((i) => i.name === item.name);

    if (filteredItems.length === 0) {
      this.items.push(item);
      this.total+= item.quantity * item.price
      console.log('Added: ', item, this.total);
    } else {
      // console.log('QUANTITY BEFORE', item.name, filteredItems[0].quantity);
      filteredItems[0].quantity += item.quantity;
      // console.log('QUANTITY', item.name, filteredItems[0].quantity);
    }
  }
}
