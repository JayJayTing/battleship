var cementShip = require("../commands/pieces/cementShip");
var createBoard = require("../commands/pieces/createBoard");
var tile = require("../tile");
//var userInput = require('prompt-sync')();
//var placementPhase = require("./placementPhase");
var placeShipTest = require('./placeShipTest');
var attackBattleShip = require('../commands/pieces/attackBattleShip')

var readline = require('readline');





var board = createBoard(10, 10, tile);


cementShip(3,5,3,"up", board);

cementShip(3,5,4,"up", board);


console.log(board);