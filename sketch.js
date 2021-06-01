const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree, stone, slingShot;
var boyImg, boySprite;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;


function preload() {
    boyImg = loadImage("boy.png");

}

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height - 10, width, 20);
    tree = new Tree(800, 400, 400, 390);
    stone = new Stone(125, 480, 50);
    mango1 = new Mango(800, 350, 50,50)
    mango2 = new Mango(745, 310, 50,50)
    mango3 = new Mango(800,270,50,50)
    mango4 = new Mango(850,310,50,50)
    mango5 = new Mango(900,370,50,50)
    mango6 = new Mango(650, 350, 50,50)
    mango7 = new Mango(695, 350, 50,50)
    mango8 = new Mango(900, 270, 50,50)
    mango9 = new Mango(900, 320, 50,50)
    mango10 = new Mango(750, 355, 50,50)
    mango11 = new Mango(950, 320, 50,50)

    boySprite=createSprite(180, 530, 50, 50);
	boySprite.addImage(boyImg)
	boySprite.scale=0.1

    slingShot = new Slingshot(stone.body,{ x: 125, y: 480});

}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
    tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display()
    mango10.display();
    mango11.display();
    drawSprites();
    stone.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}
