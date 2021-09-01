let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("spaceship.png");
  bg_img = loadImage("earth.png");
  //bg_img.scale=5

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,5,5,windowWidth,windowHeight);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

if(keyIsDown(UP_ARROW))
{
  lander .velocityY= lander .velocityY-5
}
if(keyIsDown(DOWN_ARROW))
{
  lander .velocityY= lander .velocityY+5
}


  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


