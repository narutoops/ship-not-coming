var seaImg,sea;
var shipImg1,ship;



function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}


function setup(){
  createCanvas(400,400);
 
sea=createSprite(200,200);
 sea.addImage(seaImg);
 sea.velocityX = 4;

 
 ship=createSprite(70,580,20,20);
 ship.addAnimation("shipImg1",ship);
ship.scale=4;

}

function draw() {
 background("blue");
 drawSprites();
 

 if (sea.x < 0){
  sea.x = sea.width/2;
 }
}
