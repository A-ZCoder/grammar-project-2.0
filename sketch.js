var rocket, rocketImg;
var fire, fireImg;
var space, spaceImg;
var planet1, planet1Img;
var planet2, planet2Img;
var planet3, planet3Img;
var ufo, ufoImg;
var bomb, bombImg
var expImg;
var ufoGroup;
var ship, shipImg
var bullet, bulletImg;
var surfaceImg

function preload() {
rocketImg=loadImage("rocketimg.png")
spaceImg=loadImage("space.jpg")
fireImg=loadImage("fire.png")
planet1Img=loadImage("planet1.png")
planet2Img=loadImage("planet2.png")
planet3Img=loadImage("planet3.png")
ufoImg=loadImage("ufo.png")
bombImg=loadImage("bomb.png")
expImg=loadImage("exp.png")
shipImg=loadImage("ship.png")
bulletImg=loadImage("ammo.png")
surfaceImg=loadImage("surface.jpg")
}




function setup() {
createCanvas(1200, 590)

space=createSprite(width/2, height/2, 10,10)
space.addImage(spaceImg)
space.scale=2

ufoGroup=new Group()

rocket=createSprite(width/2, 700, 10, 10)
rocket.addImage(rocketImg)
rocket.scale=0.3
rocket.velocityY=-4

ship=createSprite(600, -100, 10,10)
ship.addImage(shipImg)
ship.scale=0.1

fire=createSprite(width/2-2, 790, 10, 10)
fire.addImage(fireImg)
fire.scale=0.4
fire.mirrorY(-1)
fire.velocityY=-4

planet1=createSprite(200, 200, 10,10)
planet1.addImage(planet1Img)
planet1.scale=0.14

planet2=createSprite(width/2, 210, 10,10)
planet2.addImage(planet2Img)
planet2.scale=0.3

planet3=createSprite(1000, 220, 10,10)
planet3.addImage(planet3Img)
planet3.scale=0.8

}

function draw() {
background(0)

if(rocket.y<=470) {
   rocket.velocityY=0
   fire.velocityY=0
}

//planet1
if(mousePressedOver(planet1)) {
   planet1.y=2000
   planet2.y=2000
   planet3.y=2000
   bomb=createSprite(width/2, 100, 10,10)
   bomb.addImage(bombImg)
   bomb.scale=0.2
}

if(planet1.y>1500) {
   spawnUfo()
}

if(mousePressedOver(bomb)) {
   bomb.addImage(expImg)
   bomb.scale=0.8
   bomb.y=10
}

if(ufoGroup.isTouching(rocket)) {
   rocket.destroy()
   fire.destroy()
   bomb.destroy()
}
//planet1


//planet2
if(mousePressedOver(planet2)) {
   planet1.x=3000
   planet2.y=2000
   planet3.y=2000
   ship.velocityY=5
}

if(ship.y > 100) {
   ship.velocityY=0
}

if(mousePressedOver(ship)) {
   bullet=createSprite(width/2, 350,10,10)
   bullet.addImage(bulletImg)
   bullet.scale=0.1
   bullet.velocityY=-5
} 
//planet2


//planet3

if(mousePressedOver(planet3)) {
   space.addImage(surfaceImg)
   planet1.x=3000
   planet2.y=2000
   planet3.y=2000
   rocket.destroy()
   fire.destroy()
   
}



//planet3

drawSprites()

fill("Black")
textSize(17)
text("Collective Nouns", planet1.x-60, planet1.y)

fill("Black")
textSize(17)
text("Abstract Nouns", planet2.x-60, planet2.y)

fill("Black")
textSize(17)
text("Concrete Nouns", planet3.x-60, planet3.y)

}



function spawnUfo() {

   if(frameCount % 30 === 0) {
      ufo=createSprite(100,4,10,10)
      ufo.addImage(ufoImg)
      ufo.scale=0.2
      ufoGroup.add(ufo)
      ufo.x=Math.round(random(200,1000))
      ufo.velocityY=2
   }
}