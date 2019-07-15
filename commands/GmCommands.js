class GmCommands {

constructor(){}
    cementShip(x, y, size, direction, gameBoard)
{
var coordinates = gameBoard[x][y];

var redo = false;
    switch(direction)
    {
        
        case 'up':
            if(coordinates.y + size - 1 > gameBoard.length && !gameBoard[x][y].occupancy)
            {
                console.log("invalid option up");
                redo = true;
            }else
            {
                for(var i = 0; i < size; i ++)
                {
                    gameBoard[x][y + i].occupancy = true;
                }


            }



            break;
        case 'down':
                if(coordinates.y - size < 0 && !gameBoard[x][y].occupancy)
                {
                    console.log("invalid option down");
                    redo = true;
                }else
                {
                    for(var i = 0; i < size; i ++)
                    {
                        gameBoard[x][y - i].occupancy = true;
                    }
    
    
                }

            break;
        case 'left':
                if(coordinates.x - size < 0 && !gameBoard[x][y].occupancy)
                {
                    console.log("invalid option left");
                    redo = true;
                }else
                {
                    for(var i = 0; i < size; i ++)
                    {
                        gameBoard[x-i][y].occupancy = true;
                    }
    
    
                }

            break;
        case 'right':
                if(coordinates.x + size - 1 > gameBoard.length && !gameBoard[x][y].occupancy)
                {
                    console.log("invalid option right");
                    redo = true;
                    console.log(coordinates.x + size - 1);
                }else
                {
                    for(var i = 0; i < size; i ++)
                    {
                        gameBoard[x+i][y].occupancy = true;
                    }
    
    
                }

            break;
        default:
            break;
    }

    return redo;
}
    createTile(x, y, hit, occupancy) {
        var tile = 
        {
            'x' : x,
            'y': y,
            'hit': hit,
            'occupancy': occupancy
        }
        return tile;

    }


    createBoard(x, y, tile) {

        var board = [];

        for (var row = 0; row < y; row++) {
            board.push([]);
            for (var col = 0; col < x; col++) {
                board[row].push(this.createTile(row, col, false, undefined));
            }
        }
        return board;
    }


    attackBattleShip(x, y, board) {

        if (typeof (board[x][y]) !== undefined && board[x][y].occupancy === true) {
            console.log(`coordinates ${x}, ${y}: HIT!!`)
            board[x][y].hit = true;

        } else {
            console.log(`coordinates ${x}, ${y}: MISS!!`);
        }

    }

    drawBoard(board) {
        for (var y = board.length - 1; y >= 0; y--) {
            for (var x = 0; x < board.length; x++) {
                if (board[x][y].occupancy && board[x][y].hit) {
                    if (x === 0) {
                        process.stdout.write(y + " | X | ");
                    } else {
                        process.stdout.write("X | ");
                    }

                }

                else if (board[x][y].occupancy) {
                    if (x === 0) {
                        process.stdout.write(y + " | B | ");
                    } else {
                        process.stdout.write("B | ");
                    }

                } else {
                    if (x === 0) {
                        process.stdout.write(y + " | ~ | ");
                    } else {
                        process.stdout.write("~ | ");
                    }
                }
    git         }
            console.log();
            for (var a = 0; a < board.length * 2 + 2; a++) {
                process.stdout.write("- ")
            }
            console.log();
        }
        process.stdout.write("  | ");
        for (var a = 0; a < board.length; a++) {

            process.stdout.write(a + " | ");
        }

    }

}
module.exports = GmCommands;