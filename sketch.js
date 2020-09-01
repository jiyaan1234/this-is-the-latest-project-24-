
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbin1 = new dustbin(500,630,20,100);
dustbin2 = new dustbin(585,670,150,20);
dustbin3 = new dustbin(660,630,20,100);
ground1 = new Ground (400,690,800,10);
ball1 = new paperball (30,500,20);



	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display ();
  dustbin2.display ();
  dustbin3.display ();
  ground1.display () ;
  ball1.display();
  text(mouseX+","+mouseY , 300,50)
  
  drawSprites();
 
}

function keyPressed () {

  if (KeyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x : 85,y : -85});
  }
}



