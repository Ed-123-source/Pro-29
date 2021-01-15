const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var polygon, slingshot;


function preload() {
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500,50,200,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}