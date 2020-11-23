
var monkey , monkey_running
var banana ,bananaImage, enemy, enemyImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  enemyImage = loadImage("obstacle.png");
  bananagroup = new Group()
  enemygroup = new Group()
 
}



function setup() {
  createCanvas(600, 600);
  banana.addImage(bananaImage)
  enemy.addImage(enemyImage)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  

  
}


function draw() {
    bananafunc();
   enemyfunc();
  monkey.y = monkey.y - 2
  monkey.collide(ground)
 if(keyDown("space")){
   monkey.y = monkey.y + 5
 

 }
     stroke("white")
   textSize(20)
   fill("white")
   text("Score: + score,500,50")
   stroke("black")
   textSize(20)
   fill("black")
   survivalTime = math.ceil(frameCount/frameRate())
   text("survival time:"+survivalTime,100,50)
  
}
function bananafunc() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(200, 200, 20, 20)
    banana.scale = 0.3
    banana.y = Math.round(random(120, 200));
    banana.velocityY = -4
    banana.setLifetime = 100
    bananagroup.add(banana)
  }}
function enemyfunc() {
  if (frameCount % 300 === 0) {
    var enemy = createSprite(600, 165, 10, 40);
    enemy.setLifetime = 100
    enemygroup.add(enemy)
  }}
    
    
    
    
    