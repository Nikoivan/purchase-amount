import Buyable from "../domain/buyable";
import Movie from "../domain/movie";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  totalAmount() {
    const result = this.items.reduce((acc, item) => acc + item.price, 0);
    return result;
  }

  discountTotalAmount(discount: number) {
    const result = this.totalAmount() * ((100 - discount) / 100);
    /*if (result < 0) {
      return Math.abs(result);
    }    Посчитал, что возможно будет правильно приведение возможного значения к положительному*/
    return result;
  }

  deleteItem(id: number): void {
    const found = this.items.findIndex((item) => item.id === id);
    if (found !== -1) {
      this.items.splice(found, 1);
    }
  }

  getItems(): Buyable[] {
    return [...this.items];
  }
}
