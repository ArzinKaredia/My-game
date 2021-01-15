var evilwizard;
var goodwizard;
var monster1;
var monster2;
var monster3;
var monster4;
var monster5;
var monster6;
var monster7;
var monster8;
var monster9;

var monster1_img,monster2_img,monster3_img,monster4_img,monster5_img,monster6_img,
monster7_img,monster8_img,monster9_img,evilwizard_img,goodwizard_img
function preload() {
monster1_img = loadImage("../images/monster1.png");
monster2_img = loadImage("../images/monster2.png");
monster3_img = loadImage("../images/monster3.png");
monster4_img = loadImage("../images/monster4.png");
monster5_img = loadImage("../images/monster5.png");
monster6_img = loadImage("../images/monster6.png");
monster7_img = loadImage("../images/monster7.png");
monster8_img = loadImage("../images/monster8.png");
monster9_img = loadImage("../images/monster9.png");
evilwizard_img = loadImage("../images/evilwizard.png");
goodwizard_img = loadImage("../images/goodwizard.png");
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}