function attackBattleShip(x,y, board)
{

    if(typeof(board[x][y]) !== undefined && board[x][y].occupancy === true)
    {
        console.log(`coordinates ${x}, ${y}: HIT!!`)
        board[x][y].hit = true;

    }else
    {
        console.log(`coordinates ${x}, ${y}: MISS!!`);
    }

}

module.exports = attackBattleShip;