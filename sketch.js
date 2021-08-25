
function preload(){
var seaImg = loadImage("sea.png");
var shipImg1 = loadAnimation("ship1.png, ship2.png");

  
}

function setup(){
  createCanvas(400,400);
var sea = createSprite(0,0,15,400);
sea.addImage("sea", seaImg);

}

function draw() {
  background("blue");
 
//code to reset the background
if (sea.x < 0){
  sea.x=sea.width/2;
}


}