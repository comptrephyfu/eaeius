display: (board) => {
  console.log('Current Board:');
  board.forEach(row => console.log(row.join(' | ')));
},
