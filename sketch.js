var canvas;
var music;
var Edges;
var block1,block2,block3,block4;
var ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

block1=createSprite(0,580,360,30);
block1.shapeColor="blue"

block2=createSprite(280,580,200,30);
block2.shapeColor="red"

block3=createSprite(490,580,200,30);
block3.shapeColor="green"

block4=createSprite(700,580,200,30);
block4.shapeColor="yellow"

ball=createSprite(200,100,99,99);
ball.shapeColor="black";
ball.velocityX=10
ball.velocityY=9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

Edges=createEdgeSprites()
ball.bounceOff(Edges);


if(ball.isTouching(block1) && ball.bounceOff(block1)){
    ball.shapeColor="blue";
    music.play();
}
if(ball.isTouching(block2) && ball.bounceOff(block2)){
    ball.shapeColor="red";
    music.play();
}
if(ball.isTouching(block3) && ball.bounceOff(block3)){
    ball.shapeColor="green";
    ball.velocityX=0
    ball.velocityY=0
    music.play();
}
if(ball.isTouching(block4) && ball.bounceOff(block4)){
    ball.shapeColor="yellow";
    music.play();
}




drawSprites();

    //add condition to check if box touching surface and make it box
}
