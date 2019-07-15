// var drawBoard = require("../combined/pieces/drawBoard")
// var createBoard = require("../combined/pieces/createBoard")
// var tile = require("../combined/pieces/tile")
// var cementShip = require("../combined/pieces/cementShip");
// var attackBattleShip = require('../combined/pieces/attackBattleShip')
var gmCommands = require("../commands/GmCommands");
var GmCommands = new gmCommands();


var board = GmCommands.createBoard(10,10, GmCommands.createTile);
GmCommands.cementShip(0,0,3,"up", board);
GmCommands.cementShip(4,5,4,"right", board);
GmCommands.cementShip(9,4,3,"down", board);
GmCommands.cementShip(2,9,5,"right", board);

GmCommands.attackBattleShip(2,9,board);
GmCommands.attackBattleShip(2,8,board);
GmCommands.attackBattleShip(4,9,board);


//console.log(board);
// board[0][0].hit = true;
//console.log(board[0][0].occupancy)
GmCommands.drawBoard(board);