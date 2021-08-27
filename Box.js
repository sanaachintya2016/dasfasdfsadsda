class Box{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
     
     //Matter.Body.setMass(this.body , this.body.mass*5)
    }
    show()
    {
      fill("red")
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  