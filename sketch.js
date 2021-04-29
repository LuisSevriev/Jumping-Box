var canvas;
var music;

var box, blueBox, yellowBox, purpleBox, greenBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 9;

    blueBox = createSprite(0,580,360,30);
    blueBox.shapeColor = "blue"; 

    yellowBox = createSprite(295,580,200,30);
    yellowBox.shapeColor = "yellow";

    purpleBox = createSprite(515,580,200,30);
    purpleBox.shapeColor = "purple";

    greenBox = createSprite(740,580,220,30);
    greenBox.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(blueBox.isTouching(box) && box.bounceOff(blueBox)){
        box.shapeColor = "blue";
        music.play();
    } 

    if(yellowBox.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY  = 0;
        music.stop();
    } 

    if(purpleBox.isTouching(box) && box.bounceOff(purpleBox)){
        box.shapeColor = "purple";
        music.play();
    } 

    if(greenBox.isTouching(box) && box.bounceOff(greenBox)){
        box.shapeColor = "green";
        music.play();
    } 
    
    drawSprites();
}
