var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    var options ={
		isStatic : true,
	}
	 bucketPart1 = Bodies.rectangle(400,650,200,20,options);
	 World.add(world, bucketPart1)
	 
	 bucketPart2 = Bodies.rectangle(500,610,20,100,options);
	 World.add(world, bucketPart2)
	 
	 bucketPart3 = Bodies.rectangle(300,610,20,100,options);
     World.add(world, bucketPart3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  rect(bucketPart1.position.x,bucketPart1.position.y,200,20);
  fill("red")
  rect(bucketPart2.position.x,bucketPart2.position.y,20,100);
  
  fill("red")
  rect(bucketPart3.position.x,bucketPart3.position.y,20,100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
    
  }
}



