import Buyable from "../domain/buyable";
import Movie from "../domain/movie";

export default class Cart {
  _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get amount(): number {
    return this._items.reduce(
      (acc: number, item: Buyable) => acc + item.price,
      0
    );
  }

  discountTotalAmount(discount: number): number {
    return this.amount * ((100 - discount) / 100);
  }

  deleteItem(id: number): void {
    this._items = this._items.filter((item: Buyable) => item.id !== id);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
