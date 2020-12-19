class Ground{ 
    constructor(x,y,width,height){
      var options = {
        isStatic: true
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
  
      World.add(world,this.body);
    }
  
    display(){
      var bn = this.body.position;   
      
      fill("yellow");
      rectMode(CENTER);
      rect(bn.x,bn.y,this.width,this.height);
    }
  }