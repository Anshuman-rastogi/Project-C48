var gameState = "start";

var player1, anim1, img1, anim2, anim3, anim4, anim5, anim6, anim7, anim8;

var bgImg;

var rect1, rect2, rect3;

var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12, maze13, maze14;

var enemy1, enemy2, enemy3, enemy4, enemyimg;

var inj, inj2, inj3, inj4, injImg;

var shootImg1, shootImg2, shootImg3, shootImg4;

var strtscrn, strtscrnImg, startSound;

var health = 100, showInj = 0, enemy1Health = 100;

var edges, bFlag = false, uFlag = true;

var iFlag = 0;

var fire, lFire, rFire, dFire, uFire, fireGroup;

function preload() {
  anim1 = loadAnimation("../ASSETS/m1.png", "../ASSETS/m2.png", "../ASSETS/m1.png", "../ASSETS/m3.png");
  img1 = loadImage("../ASSETS/m1.png");
  anim2 = loadAnimation("../ASSETS/m1.png", "../ASSETS/m1.png");
  anim3 = loadAnimation("../ASSETS/m1 (2).png", "../ASSETS/m2 (2).png", "../ASSETS/m1 (2).png", "../ASSETS/m3 (2).png");
  anim4 = loadAnimation("../ASSETS/m1 (2).png", "../ASSETS/m4 (2).png");
  anim5 = loadAnimation("../ASSETS/m1 (3).png", "../ASSETS/m2 (3).png", "../ASSETS/m1 (3).png", "../ASSETS/m3 (3).png");
  anim6 = loadAnimation("../ASSETS/m1 (3).png", "../ASSETS/m4 (3).png");
  anim7 = loadAnimation("../ASSETS/m1 (4).png", "../ASSETS/m2 (4).png", "../ASSETS/m1 (4).png", "../ASSETS/m3 (4).png");
  anim8 = loadAnimation("../ASSETS/m1 (4).png", "../ASSETS/m4 (4).png");
  bgImg = loadImage("../ASSETS/bgimg.png");
  enemyimg = loadImage("../ASSETS/corona1.png");
  injImg = loadImage("../ASSETS/vaccine.png");
  strtscrnImg = loadImage("../ASSETS/startscrn.png");
  startSound = loadSound("../ASSETS/strtSnd.mp3");
  shootImg1 = loadAnimation("../ASSETS/m5.png");
  shootImg2 = loadAnimation("../ASSETS/m5 (2).png");
  shootImg3 = loadAnimation("../ASSETS/m5 (3).png");
  shootImg4 = loadAnimation("../ASSETS/m5 (4).png");
  rFire = loadImage("../ASSETS/rightFire.png");
  lFire = loadImage("../ASSETS/leftFire.png");
  uFire = loadImage("../ASSETS/upFire.png");
  dFire = loadImage("../ASSETS/downFire.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites();

  inj = createSprite(140, windowHeight - 630);
  inj.addImage(injImg);
  inj.scale = 0.09;

  inj2 = createSprite(140, windowHeight - 650);
  inj2.addImage(injImg);
  inj2.scale = 0.09;

  inj3 = createSprite(50, windowHeight - 630);
  inj3.addImage(injImg);
  inj3.scale = 0.09;

  inj4 = createSprite(50, windowHeight - 650);
  inj4.addImage(injImg);
  inj4.scale = 0.09;

  player1 = createSprite(windowWidth - 1440, windowHeight - 65);
  player1.addImage(img1);

  player1.addAnimation("forward", anim1);
  player1.addAnimation("stop", anim2);
  player1.addAnimation("reverse", anim3);
  player1.addAnimation("stop2", anim4);
  player1.addAnimation("left", anim5);
  player1.addAnimation("stop3", anim6);
  player1.addAnimation("right", anim7);
  player1.addAnimation("stop4", anim8);

  player1.addAnimation("shootLeft", shootImg4);
  player1.addAnimation("shootRight", shootImg2);
  player1.addAnimation("shootUp", shootImg1);
  player1.addAnimation("shootBottom", shootImg3)
  player1.frameDelay = 5;

  rect1 = createSprite(windowWidth - 1301, windowHeight - 110, 10, 230);
  rect1.visible = false;

  rect2 = createSprite(windowWidth - 1302, windowHeight - 650, 10, 170);
  rect2.visible = false;

  rect3 = createSprite(windowWidth - 228, windowHeight - 610, 10, 230);
  rect3.visible = false;

  enemy1 = createSprite(windowWidth - 50, windowHeight - 610);
  enemy1.addImage(enemyimg);
  enemy1.scale = 0.05;
  enemy1.debug = true;
  enemy1.setCollider("circle", 0, 0, 700);

  enemy2 = createSprite(windowWidth - 50, windowHeight - 680);
  enemy2.addImage(enemyimg);
  enemy2.scale = 0.05;

  enemy3 = createSprite(windowWidth - 140, windowHeight - 610);
  enemy3.addImage(enemyimg);
  enemy3.scale = 0.05;

  enemy4 = createSprite(windowWidth - 140, windowHeight - 680);
  enemy4.addImage(enemyimg);
  enemy4.scale = 0.05;

  maze1 = createSprite(510, windowHeight - 560, 10, 330);
  maze1.shapeColor = 0;

  maze2 = createSprite(353, windowHeight - 100, 230, 10);
  maze2.shapeColor = 0;

  maze3 = createSprite(353, windowHeight - 220, 10, 250);
  maze3.shapeColor = 0;

  maze4 = createSprite(600, windowHeight - 110, 10, 230);
  maze4.shapeColor = 0;

  maze5 = createSprite(740, windowHeight - 190, 10, 380);
  maze5.shapeColor = 0;

  maze6 = createSprite(740, windowHeight - 625, 10, 200);
  maze6.shapeColor = 0;

  maze7 = createSprite(windowWidth - 228, windowHeight - 60, 10, 230);
  maze7.shapeColor = 0;

  maze8 = createSprite(windowWidth - 380, windowHeight - 170, 300, 10);
  maze8.shapeColor = 0;

  maze9 = createSprite(windowWidth - 335, windowHeight - 500, 220, 10);
  maze9.shapeColor = 0;

  maze10 = createSprite(windowWidth - 440, windowHeight - 560, 10, 125);
  maze10.shapeColor = 0;

  maze11 = createSprite(windowWidth - 680, windowHeight - 530, 230, 10);
  maze11.shapeColor = 0;

  maze12 = createSprite(windowWidth - 690, windowHeight - 190, 10, 200);
  maze12.shapeColor = 0;

  maze13 = createSprite(windowWidth - 740, windowHeight - 290, 110, 10);
  maze13.shapeColor = 0;

  maze14 = createSprite(windowWidth - 380, windowHeight - 280, 10, 220);
  maze14.shapeColor = 0;

  strtscrn = createSprite(windowWidth / 2, windowHeight / 2);
  strtscrn.addImage(strtscrnImg);
  strtscrn.scale = 0.8;

  fire = createSprite(200, 300);
  fire.addImage("l", lFire);
  fire.addImage("r", rFire);
  fire.addImage("u", uFire);
  fire.addImage("d", dFire);
  fire.scale = 0.05;
  fire.visible = false;

  fire.debug = true;

}

function draw() {
  background(bgImg);

  playerCollision();
  enemyCollision();

  if (gameState === "start") {

    if (keyDown("s")) {
      strtscrn.visible = false;
      startSound.play();
      gameState = "play";
    }
  }

  if (gameState === "play") {

    pickInj();
    enemyMovement();

    fill(0);
    textSize(17);
    text("Health: " + health, 5, 550);

    text("Vaccine: " + showInj, 5, 570);

    if (keyWentDown(UP_ARROW)) {
      player1.changeAnimation("forward", anim1);
      player1.velocityY = -5;
      iFlag = 3;
    }
    else if (keyWentUp(UP_ARROW)) {
      player1.changeAnimation("stop", anim2);
      player1.velocityY = 0;
    }

    if (keyWentDown(DOWN_ARROW)) {
      player1.changeAnimation("reverse", anim3);
      player1.velocityY = 5;
      iFlag = 4;
    }
    else if (keyWentUp(DOWN_ARROW)) {
      player1.changeAnimation("stop2", anim4);
      player1.velocityY = 0;
    }

    if (keyWentDown(LEFT_ARROW)) {
      player1.changeAnimation("left", anim5);
      player1.velocityX = -5;
      iFlag = 1;
    }
    else if (keyWentUp(LEFT_ARROW)) {
      player1.changeAnimation("stop3", anim6);
      player1.velocityX = 0;
    }

    if (keyWentDown(RIGHT_ARROW)) {
      player1.changeAnimation("right", anim7);
      player1.velocityX = 5;
      iFlag = 2;
    }
    else if (keyWentUp(RIGHT_ARROW)) {
      player1.changeAnimation("stop4", anim8);
      player1.velocityX = 0;
    }

    if (keyDown("i")) {

      switch (iFlag) {
        case 1: player1.changeAnimation("shootLeft", shootImg4);
          break;
        case 2: player1.changeAnimation("shootRight", shootImg2);
          break;
        case 3: player1.changeAnimation("shootUp", shootImg1);
          break;
        case 4: player1.changeAnimation("shootBottom", shootImg3);
          break;
        default: player1.changeAnimation(img1);
      }

      shootInj();

      console.log(enemy1Health);
    }
  }


  drawSprites();
  text(mouseX + "," + mouseY, windowWidth / 2, 100);
}

function pickInj() {

  if (player1.isTouching(inj) || player1.isTouching(inj2) || player1.isTouching(inj3) || player1.isTouching(inj4) && showInj < 4) {
    showInj = 4;
  }
}

function playerCollision() {

  player1.collide(edges[0]);
  player1.collide(edges[1]);
  player1.collide(edges[2]);
  player1.collide(edges[3]);

  player1.collide(rect1);
  player1.collide(rect2);
  player1.collide(rect3);

  player1.collide(maze1);
  player1.collide(maze2);
  player1.collide(maze3);
  player1.collide(maze4);
  player1.collide(maze5);
  player1.collide(maze6);
  player1.collide(maze7);
  player1.collide(maze8);
  player1.collide(maze9);
  player1.collide(maze10);
  player1.collide(maze11);
  player1.collide(maze12);
  player1.collide(maze13);
  player1.collide(maze14);

}

function shootInj() {

  if (showInj > 0 && showInj <= 4) {
    fire.x = player1.x;
    fire.y = player1.y;
    fire.visible = true;
    //fire.scale = 0.7;

    if (iFlag === 1) {
      fire.velocityY = 0;
      fire.velocityX = -5;
      fire.changeImage("l");
    }
    else if (iFlag === 2) {
      fire.velocityY = 0;
      fire.velocityX = 5;
      fire.changeImage("r");
    }
    else if (iFlag === 3) {
      fire.velocityX = 0;
      fire.velocityY = -5;
      fire.changeImage("u");
    }
    else if (iFlag === 4) {
      fire.velocityX = 0;
      fire.velocityY = 5;
      fire.changeImage("d");
    }
    else {
      fire.setVelocity(0, 0);
    }

    if (enemy1.isTouching(fire)) {
      //fire.destroy();
      enemy1Health = enemy1Health - 50;
      
    }

    if(enemy1Health === 0){
      enemy1.x = windowWidth - 50;
      enemy1.y = windowHeight - 610;
    }

  }
}

function enemyCollision() {

  enemy1.collide(edges[0]);
  enemy1.collide(edges[1]);
  enemy1.collide(edges[2]);
  enemy1.collide(edges[3]);

  enemy2.collide(edges[0]);
  enemy2.collide(edges[1]);
  enemy2.collide(edges[2]);
  enemy2.collide(edges[3]);

  enemy3.collide(edges[0]);
  enemy3.collide(edges[1]);
  enemy3.collide(edges[2]);
  enemy3.collide(edges[3]);

  enemy4.collide(edges[0]);
  enemy4.collide(edges[1]);
  enemy4.collide(edges[2]);
  enemy4.collide(edges[3]);

  enemy1.collide(maze1);
  enemy1.collide(maze2);
  enemy1.collide(maze3);
  enemy1.collide(maze4);
  enemy1.collide(maze5);
  enemy1.collide(maze6);
  enemy1.collide(maze7);
  enemy1.collide(maze8);
  enemy1.collide(maze9);
  enemy1.collide(maze10);
  enemy1.collide(maze11);
  enemy1.collide(maze12);
  enemy1.collide(maze13);
  enemy1.collide(maze14);

  enemy2.collide(maze1);
  enemy2.collide(maze2);
  enemy2.collide(maze3);
  enemy2.collide(maze4);
  enemy2.collide(maze5);
  enemy2.collide(maze6);
  enemy2.collide(maze7);
  enemy2.collide(maze8);
  enemy2.collide(maze9);
  enemy2.collide(maze10);
  enemy2.collide(maze11);
  enemy2.collide(maze12);
  enemy2.collide(maze13);
  enemy2.collide(maze14);

  enemy3.collide(maze1);
  enemy3.collide(maze2);
  enemy3.collide(maze3);
  enemy3.collide(maze4);
  enemy3.collide(maze5);
  enemy3.collide(maze6);
  enemy3.collide(maze7);
  enemy3.collide(maze8);
  enemy3.collide(maze9);
  enemy3.collide(maze10);
  enemy3.collide(maze11);
  enemy3.collide(maze12);
  enemy3.collide(maze13);
  enemy3.collide(maze14);

  enemy4.collide(maze1);
  enemy4.collide(maze2);
  enemy4.collide(maze3);
  enemy4.collide(maze4);
  enemy4.collide(maze5);
  enemy4.collide(maze6);
  enemy4.collide(maze7);
  enemy4.collide(maze8);
  enemy4.collide(maze9);
  enemy4.collide(maze10);
  enemy4.collide(maze11);
  enemy4.collide(maze12);
  enemy4.collide(maze13);
  enemy4.collide(maze14);

}

function enemyMovement() {

  if (!bFlag) {
    enemy1.velocityY = 5;
    enemy2.velocityY = 5;
  }
  if (enemy1.y >= 690) {
    bFlag = true;
    enemy1.velocityY = -5;
    enemy2.velocityY = -5;
    //console.log(enemy1.y);
  }

  if (enemy2.y > 710) {
    enemy2.velocityY = -5;
  }

  if (enemy1.y <= 495 && bFlag === true) {
    enemy1.velocityY = 0;
    enemy1.velocityX = -5;
  }

  if (enemy2.y <= 495 && bFlag === true) {
    enemy2.velocityY = 0;
    enemy2.velocityX = -5;
  }

  if (enemy1.x <= 1215 && bFlag && uFlag) {
    enemy1.velocityX = 0;
    enemy1.velocityY = -5;
  }

  if (enemy2.x <= 1215 && bFlag && uFlag) {
    enemy2.velocityX = 0;
    enemy2.velocityY = -5;
  }

  if (enemy1.y < 275 && bFlag) {
    enemy1.velocityY = 0;
    enemy1.velocityX = -5;
  }

  if (enemy2.y < 275 && bFlag) {
    enemy2.velocityY = 0;
    enemy2.velocityX = -5;
  }

  if (enemy2.x <= 1035 && bFlag) {
    enemy2.velocityX = 0;
    enemy2.velocityY = -5
  }

  if (enemy1.x < 1090 && bFlag && uFlag) {
    bFlag = false;
    enemy1.velocityX = 0;
    enemy1.velocityY = 5;
  }

  if ((enemy1.y >= 500 && enemy1.x <= 1470 && !bFlag && uFlag)/* || (enemy1.y > 639 && enemy1.x <= 970 && !bFlag && !uFlag)*/) {
    uFlag = false;
    bFlag = true;
    enemy1.velocityY = 0;
    enemy1.velocityX = -5;
    console.log("1");
  }

  if (enemy1.x < 970 && enemy1.x > 965 && enemy1.y > 490 && enemy1.y < 515 && bFlag) {
    bFlag = false;
    enemy1.velocityX = 0;
    enemy1.velocityY = 5;
  }

  if (enemy1.y > 639 && enemy1.x <= 970 && !bFlag && !uFlag) {
    bFlag = true;
    //uFlag = true;
    enemy1.velocityY = 0;
    enemy1.velocityX = 5;
  }

  if (enemy1.x === 1271 && bFlag && !uFlag) {
    uFlag = true;
    bFlag = false;
    enemy1.y = 645;
  }

  if (enemy1.x < 885 && bFlag && !uFlag) {
    enemy1.velocityX = 0;
    enemy1.velocityY = -5;
  }

  if (enemy1.y <= 300 && bFlag && !uFlag) {
    enemy1.velocityY = 0;
    enemy1.velocityX = -5
  }

  if (enemy1.x <= 660 && bFlag && !uFlag) {
    enemy1.velocityX = 0;
    enemy1.velocityY = 5;
  }

  //console.log(enemy1.x);

  // console.log(bFlag);
  //console.log(enemy1.y);
}