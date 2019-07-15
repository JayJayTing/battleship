var cementShip = require("../commands/pieces/cementShip");


function placeShip(numberOfShips, size, board)
{
    
// for(var i = 0; i < numberOfShips; i ++)
// {
    var x = userInput("input x");
    var y = userInput("input y");
    var direction = userInput("input direction");
    
    while(cementShip(x, y,size,direction,board))
    {
        console.log("your inputs are not right");
        var x = userInput("input x");
        var y = userInput;
        var direction = userInput("input y");
    }




    
//}

}
module.exports = placeShip;