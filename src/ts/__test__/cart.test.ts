import Cart from "../service/cart";
import Movie from "../domain/movie";

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

test("test for method add of class Cart", () => {
  expect(cart.items.length).toBe(2);
});

test("test for method getItems of class Cart", () => {
  const result = cart.items;
  expect(result).toEqual([
    {
      id: 111,
      title: "Avengers Assemble!",
      price: 1000,
      year: 2012,
      country: "USA",
      genres: ["fantastic", "action", "fantasy", "adventures", "..."],
      time: "137 мин. / 02:17",
    },
    {
      id: 112,
      title: "Superman",
      price: 1500,
      year: 2020,
      country: "USA",
      genres: ["fantastic", "action", "fantasy", "adventures", "..."],
      time: "137 мин. / 02:17",
    },
  ]);
});

test("test for method totalAmount of class Cart", () => {
  expect(cart.amount).toBe(2500);
});

test("test for method discountTotalAmount", () => {
  expect(cart.discountTotalAmount(10)).toBe(2250);
});

test("test for method deleteItem", () => {
  cart.deleteItem(111);
  expect(cart._items.length).toBe(1);
});
