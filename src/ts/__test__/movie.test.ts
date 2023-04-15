import Movie from "../domain/movie";

test("test for constructor of class Movie", () => {
  const avengers = new Movie(
    111,
    "Avengers Assemble!",
    1000,
    2012,
    "USA",
    ["fantastic", "action", "fantasy", "adventures", "..."],
    "137 мин. / 02:17"
  );
  expect(avengers).toEqual({
    id: 111,
    title: "Avengers Assemble!",
    price: 1000,
    year: 2012,
    country: "USA",
    genres: ["fantastic", "action", "fantasy", "adventures", "..."],
    time: "137 мин. / 02:17",
  });
});
