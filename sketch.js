/*var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;*/
var form;
var backgroundImg;
var tiger,elephant,lion,rabbit,giraffe;

function preload(){
backgroundImg = loadImage("animalspics/background.jpg");
tiger = loadImage("animalspics/tiger.jpg");
elephant = loadImage("animalspics/elephant.jpg");
lion = loadImage("animalspics/lion.jpg");
rabbit = loadImage("animalspics/rabbit.jpg");
giraffe = loadImage("animalspics/giraffe.jpg");
}
function setup() {
  createCanvas(displayWidth-150,displayHeight-100);

form = new Form();
}

function draw() {
background(backgroundImg);

form.display();

}