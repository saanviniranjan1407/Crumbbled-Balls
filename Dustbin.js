class Dustbin{
  constructor(x,y,width,height){
    var options = {
      isStatic: true,
      friction: 0.5,
      restitution: 0.3,
      density: 1.2
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);
  }

  display(){
    var gh = this.body.position;
    var angle = this.body.angle;

    push();
    translate(gh.x,gh.y);
    rotate(angle);
    noStroke();
    fill("white");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}