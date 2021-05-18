const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops=[];
var maxDrops=100;
var umbrella;
var rand;
var night;
var Thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");

    batAnimation = loadAnimation("images/bat1.png","images/bat2.png","images/bat3.png",
                        "images/bat4.png","images/bat5.png","images/bat6.png",
                        "images/bat7.png","images/bat8.png","images/bat9.png",
                        "images/bat10.png","images/bat11.png","images/bat12.png");
   
}

function setup(){
    var canvas=createCanvas(500,700)
    engine = Engine.create();
    world = engine.world;


    umbrella = new Umbrella(200,500);

    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrops(random(0,500),random(0,500)));
    }   
}

function draw(){
    Engine.update(engine);
    background(night); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }



    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }
   

    drawSprites();
}   

