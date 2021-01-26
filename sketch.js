
var tom,jerry,ground;

function preload() {
    //load the images here
    backImg = loadImage("images/garden.png");
    cat_running = loadAnimation("images/cat2.png","images/cat3.png");
    catImg = loadImage("images/cat1.png");
    ratImg = loadImage("images/mouse1.png");
    lolImg = loadImage("images/cat4.png");
    kingImg = loadImage("images/mouse4.png");
    rat_running = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(925,800);
    
    //create tom and jerry sprites here
    ground = createSprite(450,400,1800,1400);
    ground.addImage("bg",backImg);
    tom = createSprite(700,650,100,100);
    tom.addImage("cat",catImg);
    tom.scale = 0.15;
    jerry = createSprite(100,650,50,50);
    jerry.addImage("rat",ratImg);
    jerry.scale = 0.15;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x === jerry.x ){
            tom.x = 200;
            tom.velocityX = 0;
            tom.addImage("cat2",lolImg);
            tom.changeImage("cat2");
            jerry.addImage("rat2",kingImg);
            jerry.changeImage("rat2");
        }
    
    keyPressed();
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
          tom.velocityX = -5;
          tom.scale = 0.15;
          tom.addAnimation("catrunning",cat_running);
          tom.changeAnimation("catrunning");
          jerry.addAnimation("ratrunning",rat_running);
          jerry.changeAnimation("ratrunning");
      }

}
