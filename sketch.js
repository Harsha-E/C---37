var gameState,playerCount, database;
var form, player, allPlayers, game;

function setup(){
  database = firebase.database();
  gameState = 0;
  createCanvas(400, 40);
  game = new Game();
  game.getState();
  game.state();

}

function draw(){
  background("lavender");
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play(); 
  }

  drawSprites();
}
