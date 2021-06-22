var car,wall,speed,weight,de

function setup() {
  createCanvas(1200,1200);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX =speed
  wall=createSprite(1000,300,60,height/2)
  de=0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);  
  
  if(car.isTouching(wall)){
    car.velocityX=0  
    
    if(de<100){
      car.shapeColor=color(0,225,0)
    }
    
    if(de<180 && de>100){
      car.shapeColor=color(230,230,0)
    }
  
    if(de>180){
      car.shapeColor=color(225,0,0)
    }
  }
  
  drawSprites();
}