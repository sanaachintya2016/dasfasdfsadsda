const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var myEngine, myWorld;


function preload(){
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
 ground = new Ground(350,350,1010,25);
hero = new Hero(200,200,250,100);
chain = new Chain(hero.body,{x:150 ,y: 20});
box1 = new Box(424,316,37,37);
box2 = new Box(424,265,37,37);
box3 = new Box(424,246,37,37);
box4 = new Box(424,210,37,37);
box5 = new Box(424,200,37,37);
box6 = new Box(424,180,37,37);
box7 = new Box(424,155,37,37);
box8 = new Box(490,316,37,37);
box9 = new Box(490,296,37,37);
box10 = new Box(490,276,37,37);
box11 = new Box(490,256,37,37);
box12 = new Box(490,236,37,37);
box13 = new Box(490,216,37,37);
box14 = new Box(540,312,37,37);
box15 = new Box(540,296,37,37);
box16 = new Box(540,316,37,37);
box17 = new Box(540,276,37,37);
box18 = new Box(540,256,37,37);
box19 = new Box(540,236,37,37);
box20 = new Box(540,216,37,37);
box21 = new Box(540,196,37,37);
box22 = new Box(595,316,37,37);
box23 = new Box(595,296,37,37);
box24 = new Box(595,276,37,37);
box25 = new Box(595,256,37,37);
box26 = new Box(595,236,37,37);

monster = new Monster(800,230,150,150)

};

function draw() {
  background(225);  
  text(mouseX + ',' + mouseY, 30, 45);

  Engine.update(myEngine);
ground.show();
hero.show();
box1.show();
box2.show();
box3.show();
box4.show();
box5.show();
box6.show();
box7.show();
box8.show();
box9.show();
box10.show();
box11.show();
box12.show();
box13.show();
box14.show();
box15.show();
box16.show();
box17.show();
box18.show();
box19.show();
box20.show();
box21.show();
box22.show();
box23.show();
box24.show();
box25.show();
box26.show();
monster.show();


  };
  function mouseDragged(){
    Matter.Body.setPosition(hero.body, {'x': mouseX , 'y': mouseY});
  
  }