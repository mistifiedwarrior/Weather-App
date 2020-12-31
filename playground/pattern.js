//=============To Create a Hollow rectangle============================

// const createRectangle = (row, col) => {
//   const edgeRows = '*'.repeat(col);
//   const middleRow = '*' + ' '.repeat(col - 2) + '*';
//   console.log(edgeRows);
//   for (let i = 0; i < row - 2; i++) {
//     console.log(middleRow);
//   }
//   console.log(edgeRows);
// };

// const args = process.argv.slice(2);
// createRectangle(args[0], args[1]);

//=====================to create a filled rectangle==========================

// const createRectangle = (col, row, char) =>
//   (char.repeat(col) + '\n').repeat(row);
//   console.log(createRectangle(5, 9, 'A'));

//=====================OR========================

// const rect = (col, row, char) => {
//   const design = (char.repeat(col) + '\n').repeat(row);
//   console.log(design);
// };
// const args = process.argv.slice(2);
// rect(args[0], args[1], args[2]);

//=======================Cyclical lines==========================

const createCycle = (row, col, char1, char2) => {
  const row1 = char1.repeat(col);
  const row2 = char2.repeat(col);
  // console.log(row1);
  // console.log(row2);
};

console.log(createCycle(4, 5, '+', '-'));
