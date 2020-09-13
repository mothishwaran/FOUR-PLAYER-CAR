const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events=Matter.Events;


  var world,engine;
 
//var particles = [];
var plinkos = [];
var divisions=[];
var ground;
var score=0;
var particle;
var turn=0;

var play=1;
var End=0;
var gameState=play;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   
    
}

 


function draw() {

  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(20);
noStroke();
 text ("100",width/2+10,divisionHeight*1.8);
 text ("1000",width/2+350,divisionHeight*1.8);
 text ("100",width/2+100,divisionHeight*1.8);
 text ("500",width/2-370,divisionHeight*1.8);
 text ("1000",width/2+170,divisionHeight*1.8);
 text ("1000",width/2+260,divisionHeight*1.8);
 text ("100",width/2-50,divisionHeight*1.8);
 text ("500",width/2-120,divisionHeight*1.8);
 text ("500",width/2-220,divisionHeight*1.8);
 text ("500",width/2-300,divisionHeight*1.8);
  Engine.update(engine);
   ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   // score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
  //   particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
  
   if (particle!=null)
   {
   particle.display();
    
    if(particle.body.position.y>760)
    {
    
      if(particle.body.position.x<300)
      {
        score=score+500;
        particle=null;
      if(turn >=5)  gameState="End";
      }
    }
    }

    if (particle!=null)
    {
    particle.display();
     
     if(particle.body.position.y>760)
     {
     
       if(particle.body.position.x>301 && particle.body.position<600)
       {
         score=score+100;
         particle=null;
       if(turn >=5)  gameState="End";
       }
     }
     }


     if (particle!=null)
     {
     particle.display();
      
      if(particle.body.position.y>760)
      {
      
        if(particle.body.position.x>601 && particle.body.position.x<900)
        {
          score=score+1000;
          particle=null;
        if(turn >=5)  gameState="End";
        }
      }
      }
 
  

if(gameState==="End"){
  textSize(50);
  strokeWeight(10);
  stroke(225,random(0,225),0);
  text("GAME OVER ", 200,300);
}

  
}

 function mousePressed(){
    if(gameState!="End"){
      turn++;
      particle=new Particle(mouseX ,10,10,10);
      
      
    }
  }
  
