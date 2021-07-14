// colors[Math.floor(Math.random() * colors.length)];

// [
//   "80, 227, 230",
//   "223, 173, 36",
//   "223, 217, 36",
//   "48, 211, 56",
//   "132, 61, 198",
//   "227, 78, 78"
// ];

const randomColor = () => {
  const colors = [
    "80, 227, 230",
    "223, 173, 36",
    "223, 217, 36",
    "48, 211, 56",
    "132, 61, 198",
    "227, 78, 78"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shape: [[0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0]],
    color: randomColor
  },
  J: {
    shape: [[0, "J", 0], [0, "J", 0], ["J", "J", 0]],
    color: randomColor
  },
  L: {
    shape: [[0, "L", 0], [0, "L", 0], [0, "L", "L"]],
    color: randomColor
  },
  O: {
    shape: [["O", "O"], ["O", "O"]],
    color: randomColor
  },
  S: {
    shape: [[0, "S", "S"], ["S", "S", 0], [0, 0, 0]],
    color: randomColor
  },
  T: {
    shape: [[0, 0, 0], ["T", "T", "T"], [0, "T", 0]],
    color: randomColor
  },
  Z: {
    shape: [["Z", "Z", 0], [0, "Z", "Z"], [0, 0, 0]],
    color: randomColor
  }
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
