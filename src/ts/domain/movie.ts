import Buyable from "./buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly genres: string[],
    readonly time: string
  ) {}
}
