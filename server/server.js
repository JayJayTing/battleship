

serverInit();

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const drawBoard = require("./non-server/postDrawboard");
var bodyParser = require('body-parser')
app.set("view engine", "ejs");
app.set('views', '../views');
app.use(bodyParser.urlencoded({extended: true}));
//let gm = new GmCommands();



app.use(express.static("public"));



app.get('/', (req, res) => {
    //res.render("urls_setup");
    
    res.render("urls_homepage");
  });
  
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });

  app.post("/homeSetup", (req, res) =>{
    //drawboard.boardInit(req, res, 1);
    res.render("urls_setup");
  } )

  app.post("/setup", (req, res)=>{
  
    drawBoard.boardInit(req, res, 1);
  
    res.redirect("/setup2");
  })
  app.post("/setup2", (req, res)=>{
    drawBoard.boardInit(req, res, 2);
    console.log("this is working");
    res.render("urls_setup2");
  })
  app.get("/setup2", (req, res)=>{
    //drawBoard.boardInit(req, res, 2);
    console.log("this is GeT");
    res.render("urls_setup2");
  })

  app.post("/drawboard",(req,res)=>{
      // if(req.body.columns){
      //   //first time board setup
      //   drawBoard.boardInit(req, res);
      // }else{
      //   //This controls the button commands
      //  drawBoard.boardUpdate(req, res);
      // }
    console.log("drawing board")
    
      drawBoard.boardUpdate(req, res);
      
      
      
  })




  //simplifying functions

  function boardInit(req, res, boardNumber){
    var board = gm.createBoard(req.body.columns, req.body.columns, gm.createTile);
    database[`board${boardNumber}`] = board;
    //testing
    let x = parseInt(req.body.x);
    let y = parseInt(req.body.y);
    let size = parseInt(req.body.size);
    let direction = req.body.direction;
    
    //console.log(typeof(x), typeof(y), typeof(size), typeof(direction));
    gm.cementShip(x, y, size, direction, board);
    //gm.attackBattleShip(5, 5, board);
    //testing
    res.render("urls_drawboard", {board: board, gm: gm});
  }
  function serverInit(){
    const GmCommands = require('../commands/GmCommands');
    let database = require("./Database/database");
    database.gm = new GmCommands()
  }