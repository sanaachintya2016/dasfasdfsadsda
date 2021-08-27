class Monster{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,260,260,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
     this.image = loadImage("images/Monster-01.png")
     
    }
    show()
    {
        imageMode(CENTER);
        image(this.image ,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  