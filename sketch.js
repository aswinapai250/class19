var rocket,rocketImg
var obstacle,obstacleImg;
var space,spaceImg;
var star,starImg;
var starGroup,obstaclsGroup;
var score=0;
var gameState = "play"
var gameover,gameoverImg;
var lives = 3;




function preload(){
    
    spaceImg = loadImage("space bg.png");
    rocketImg = loadImage("rocket.png");
    starImg = loadImage("images.png");
    obstacleImg = loadImage("astroid.png");
    gameoverImg = loadImage("game_over.png")


}

    function setup() {

        createCanvas(600,600);
    
        space = createSprite(600,200);
        space.addImage(spaceImg);
        //space.scale = 2;
        
        rocket = createSprite(200,50)
        rocket.addImage(rocketImg);
        rocket.scale = 0.05;

        
      


        starGroup = new Group();
        obstaclsGroup = new Group();
        
       
    
}

    function draw() {
    background(0);
    
    if(keyDown("right")){
        rocket.x -=-3;
        }
        if(keyDown("left")){
            rocket.x -=3;
        }
        space.velocityY =2;

        if(space.y > 400){
            space.y = 0;
        }
        
        if(keyDown("up")){
            rocket.y -=3;
        }

        if(keyDown("down")){
            rocket.y -=-3;
        }
       
        if(rocket.isTouching(obstaclsGroup)){
            rocket.velocityY = 0;
        }


        if(rocket.isTouching(starGroup)){
            score = score+5;
            starGroup.destroyEach();
        }

     

        

        spawnstars();

    
    drawSprites();
    if(rocket.isTouching(obstaclsGroup)){
        lifeover();
        starGroup.destroyEach();
        obstaclsGroup.destroyEach();
        }




    if(gameState =="end"){
        stroke("yellow");
        fill("red");
    
        textSize(30);
        text("GAME OVER",200,200);
        rocket.velocityY = 0;
        rocket.velocityX = 0;
        rocket.x = 300,300;
        starGroup.destroyEach();
        obstaclsGroup.destroyEach();
        

        space.velocityY = 0;
        star.velocityY = 0;
        obstacle.velocityY =0;
        rocket.debug = true;
    
      }




    stroke("black");
    fill("black");

        textSize(20);
text("score:"+score,5,15);



text("lives:"+lives,530,30)

}

function spawnstars(){
   if(frameCount%250 ==0){
    star = createSprite(120,600);
    star.addImage(starImg);
    star.x = Math.round(random(10,590));
    star.velocityY = -1;
    star.lifetime = 290;
    starGroup.add(star);
    star.scale = 0.15;
    }

    if(score>20){
        if(frameCount%100 ==0){
            obstacle = createSprite(120,600);
            obstacle.addImage(obstacleImg);
            obstacle.x = Math.round(random(10,590));
            obstacle.velocityY = -(2 +2*score/10 );
            obstacle.lifetime = 290;
            obstaclsGroup.add(obstacle);
            obstacle.scale = 0.09;
        }

    }
    else{
        if(frameCount%300 ==0){
            obstacle = createSprite(120,600);
            obstacle.addImage(obstacleImg);
            obstacle.x = Math.round(random(10,590));
            obstacle.velocityY = -(2 +2*score/10 );
            obstacle.lifetime = 290;
            obstaclsGroup.add(obstacle);
            obstacle.scale = 0.09;
        }

    }
    
    


}


function lifeover(){
    lives = lives - 1;
    if(lives>=1) {
      gameState = "play";
    }
    else {
      gameState = "end";
    }
  }
