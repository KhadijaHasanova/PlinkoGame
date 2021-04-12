const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
 
var divisionHeight = 300;
 
var score = 0;
 
var count = 0;
 
var gameState = "play";
 
var particle;
 
 
function setup() {
 //create the canvas
 createCanvas(800,800);
 
 engine = Engine.create();
 world = engine.world;
 
 //create the ground
 ground = new Ground(width/2,height,width,20);
 
 //create the divisions
 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
 }
 
 //create the plinkos
 for (var j = 75; j <=width; j=j+50) {
   plinkos.push(new Plinko(j,75));
 }
 for (var j = 50; j <=width-10; j=j+50) {
   plinkos.push(new Plinko(j,175));
 }
 for (var j = 75; j <=width; j=j+50) {
   plinkos.push(new Plinko(j,275));
 }
 for (var j = 50; j <=width-10; j=j+50) {
   plinkos.push(new Plinko(j,375));
 }
}
 
 
function draw() {
 //set the background color
 background("black");
 
 //display the score
 textSize(20)
 text("Score: " + score,20,30);
 
 Engine.update(engine);
 //display the plinkos
 for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
 }
 
 //display the divisions
 for (var d = 0; d < divisions.length; d++) {
   divisions[d].display();
 }
 
 text("500",20,height-divisionHeight+30)
 text("500",100,height-divisionHeight+30)
 text("500",180,height-divisionHeight+30)
 text("500",260,height-divisionHeight+30)
 text("100",340,height-divisionHeight+30)
 text("100",420,height-divisionHeight+30)
 text("100",500,height-divisionHeight+30)
 text("200",580,height-divisionHeight+30)
 text("200",660,height-divisionHeight+30)
 text("200",740,height-divisionHeight+30)
 
 //display the particle and increase the score
 if(particle != null) {
   //display the particle
   particle.display();
 
   if(particle.body.position.y > 760) {
 
     if(particle.body.position.x < 300) {
       //increase the score
       score = score + 500;
        //make the particle null
       particle = null;
     }
   }
  
   //end the game
   if(count >= 5) {
     gameState = "end";
   }
 }

  //display the particle and increase the score
  if(particle != null) {
    //display the particle
    particle.display();
  
    if(particle.body.position.y > 760) {
     
      if(particle.body.position.x > 301 && particle.body.position.x < 600) {
        //increase the score
        score = score + 100;
         //make the particle null
        particle = null;
      }
    }
   
    //end the game
    if(count >= 5) {
      gameState = "end";
    }
  }

   //display the particle and increase the score
 if(particle != null) {
  //display the particle
  particle.display();

  if(particle.body.position.y > 760) {

    if(particle.body.position.x > 601 && particle.body.position.x < 900) {
      //increase the score
      score = score + 200;
       //make the particle null
      particle = null;
    }
  }
 
  //end the game
  if(count >= 5) {
    gameState = "end";
  }
}
 
 //display that the game is over
 if(gameState === "end") {
   textSize(70);
   fill("red");
   text("Game Over",220,250);
 }
 
}
 
 
function mousePressed() {
 if(gameState !== "end") {
   //increase the count
   count++;
 
   //create a new particle
   particle = new Particle(mouseX,10,10,10);
 }
}