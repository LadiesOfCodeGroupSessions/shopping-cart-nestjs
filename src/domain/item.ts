export class Item {
  public price: number;
  public quantity: number;
  public name: string;
  public id: number;

  constructor(name: string, price: number, quantity: number, id: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }
}
