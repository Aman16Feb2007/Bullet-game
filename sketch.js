var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car =createSprite(50, 200, 50, 50);
  car.shapeColor = "black";


  wall = createSprite(1400,200,10,200);
  wall.shapeColor = rgb(80,80,80);
    

  speed = Math.round(random(55,90));
  
  weight = Math.round(random(400,1500));
  car.velocityX = speed;
 
}

function draw() {
  background("yellow");

  deformation = Math.round(0.5*weight*speed*speed/22500);

  if (wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX = 0; 
    if(deformation > 180){
car.shapeColor = "red";
    }
    
    if (deformation < 100){
      car.shapeColor = "green";
    }

    /*if (deformation between 100){
      car.shapeColor = "green";
    }*/

    if (deformation > 180){
      car.shapeColor = "red";
    }



  
  }

  drawSprites();

  textSize(20);
  text("speed "+speed,1000,20);
  text("weight "+weight,1000,50)
  text("deformation "+deformation,1000,80); 


}