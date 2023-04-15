import Buyable from "../domain/buyable";
import Movie from "../domain/movie";

export default class Cart {
  _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get amount(): number {
    const result = this._items.reduce((acc, item) => acc + item.price, 0);
    return result;
  }

  discountTotalAmount(discount: number): number {
    const result = this.amount * ((100 - discount) / 100);
    /*if (result < 0) {
      return Math.abs(result);
    }    Посчитал, что возможно будет правильно приведение возможного значения к положительному*/
    return result;
  }

  deleteItem(id: number): void {
    const found = this._items.findIndex((item) => item.id === id);
    if (found !== -1) {
      this._items.splice(found, 1);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
