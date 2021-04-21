var car,wall;
var speed,weight;


function setup() {

  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);

  wall.shapeColor=80,80,80

  speed=random(55,90)
  weight=random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background("black");  

  var deformation=0.5*weight*speed*speed/22509;

  if (wall.x-car.x<wall.width/2+car.width/2 && deformation<100 ){
    car.velocityX=0;
    car.shapeColor="green"
  }

  if (wall.x-car.x<wall.width/2+car.width/2 && deformation<180 && deformation>100){
    car.velocityX=0;
    car.shapeColor="yellow"
  }
  
  if (wall.x-car.x<wall.width/2+car.width/2 && deformation>180){
    car.velocityX=0;
    car.shapeColor="red"
  }

  drawSprites();
}