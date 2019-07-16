
const database = require("../Database/database");
const gm = database.gm;
//initializes board
function boardInit(req, res, boardNumber){
    var board = gm.createBoard(req.body.columns, req.body.columns, gm.createTile);
    database[`board${boardNumber}`] = board;
    //testing

  for(let i = 0; i < 1; i ++){
    let x = parseInt(req.body[`x${i}`]);
    
    let y = parseInt(req.body[`y${i}`]);
    let size = parseInt(req.body[`size${i}`]);
    let direction = req.body[`direction${i}`];
    
    //console.log(typeof(x), typeof(y), typeof(size), typeof(direction));
    gm.cementShip(x, y, size, direction, board);
  }
    



    //gm.attackBattleShip(5, 5, board);
    //testing
    res.render("urls_drawboard", {board: board, gm: gm});
  }

  function boardUpdate(req, res){
 //This controls the button commands
 x = Number(req.body.button[0]);
 y = Number(req.body.button[1]);
 gm.attackBattleShip(x, y, database.board);
res.render("urls_drawboard", {board: database.board, gm: database.gm})
  }

  module.exports = {boardInit, boardUpdate}