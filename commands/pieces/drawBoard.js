function drawBoard(board)
{
    for(var y = board.length -1; y >= 0 ; y--)
    {
        for(var x = 0 ; x < board.length ; x++)
        {
            if(board[x][y].occupancy && board[x][y].hit)
            {
                if(x === 0)
                {
                    process.stdout.write(y+ " | X | ");
                }else{
                    process.stdout.write("X | ");
                }
                
            }

            else if(board[x][y].occupancy)
            {
                if(x === 0)
                {
                    process.stdout.write( y+" | B | ");
                }else{
                    process.stdout.write("B | ");
                }
                
            }else{
                if(x === 0)
                {
                    process.stdout.write(y+" | ~ | ");
                }else{
                    process.stdout.write("~ | ");
                }
                
            }
            
        
                
            
            

        }
        console.log();
        for(var a = 0; a < board.length * 2 + 2; a++)
        {
            process.stdout.write("- ")
        }
        console.log();
    }
    process.stdout.write("  | ");
    for(var a = 0; a < board.length; a++)
    {

        process.stdout.write(a+ " | ");
    }

}

module.exports = drawBoard;
