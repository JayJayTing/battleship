



function cementShip(x, y, size, direction, gameBoard)
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

module.exports = cementShip;