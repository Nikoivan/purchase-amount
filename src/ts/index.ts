import Cart from "./service/cart";
import Buyable from "./domain/buyable";
import Movie from "./domain/movie";

const cart = new Cart();
const avengers = new Movie(
  111,
  "Avengers Assemble!",
  1000,
  2012,
  "USA",
  ["fantastic", "action", "fantasy", "adventures", "..."],
  "137 мин. / 02:17"
);
cart.add(avengers);

const superman = new Movie(
  112,
  "Superman",
  1500,
  2020,
  "USA",
  ["fantastic", "action", "fantasy", "adventures", "..."],
  "137 мин. / 02:17"
);

cart.add(superman);

console.log(cart.items);

cart.deleteItem(110);

console.log(cart.items);
