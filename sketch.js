var a,b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 50);
  a.shapeColor = "green";
  
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
 
  c=createSprite(200,400,50,50);
  d=createSprite(400,400,50,50);
  c.shapeColor="green";
  d.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
 b.y = World.mouseY;

  if(isTouching(b,c)){
    b.shapeColor="orange";
    c.shapeColor="orange";
  }
  else{
    c.shapeColor="green";
  b.shapeColor="green";
  }
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
  return false;
}
}