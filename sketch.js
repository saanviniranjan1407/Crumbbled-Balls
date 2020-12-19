const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;	
  
  paper = new Paper(160,200,20);
  ground = new Ground(400,595,800,10);

  dustbin1 = new Dustbin(670,585,100,10);
  dustbin2 = new Dustbin(625,545,10,90);
  dustbin3 = new Dustbin(715,545,10,90);
}

function draw() { 
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:50, y:-75});
  }
}