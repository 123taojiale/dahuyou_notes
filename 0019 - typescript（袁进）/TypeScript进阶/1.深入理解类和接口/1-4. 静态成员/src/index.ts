class Board {
  width: number = 500;
  height: number = 700;

  private constructor() {}

  static readonly singleBoard = new Board();
}

const b1 = Board.singleBoard;
const b2 = Board.singleBoard;
b1 === b2 // => true