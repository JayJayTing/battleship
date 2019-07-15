function createBoard(x, y, tile)
{
    
  var board =  [];
  
  for(var row = 0; row < y; row ++)
  {
    board.push([]);
    for(var col = 0; col < x; col ++)
    {
      board[row].push(new tile(row, col, false, undefined));
    }
  }
  return board;
  
}

module.exports = createBoard;