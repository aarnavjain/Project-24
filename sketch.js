
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(110, 620, 10);
ground = new Ground(400,700,800,20);
left = new Dustbin(550,620,20,100);
bottom= new Dustbin(610,660,100,20);
right = new Dustbin(670, 620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	paper.display();
	ground.display();
	left.display();
	right.display();
	bottom.display();


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-15})
	

}


}

