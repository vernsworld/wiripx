let detailY;
let fr = 15; //starting FPS
var img;
var hand;
var theta = 0;
var amp;
let bgColor = 0;
//music
let tune;
let loopStart = 0.5;
let loopDuration = 0.2;
let randomIndex = 0;
let randomNumber;

function preload(){
  tune = loadSound('assets/whenitreignsitpoorsX.mp3');
  img = loadImage('assets/seethro.png');
  mouse = loadImage('assets/mouse.png');
}

function setup() {
  frameRate(fr); 
  var cnv =   createCanvas(windowWidth*.9, windowHeight*.9, WEBGL);
  var x = ((windowWidth - width) / 2)-10;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  button = createButton("Play When It Reigns It Poors X");
  button.mousePressed(togglePlaying);
 //button.mousePressed(openMain);
  //button.size(100,50);
  button.style("font-family","VideoTerminalScreen-Normal");
  //button.style("background-color","#000", 0);
  //button.style("color","#000");


}

function draw() {
  cursor(CROSS, 32, 32);
  push();
  translate(width/2, height/2);
  beginShape();
  fill(231, 231, 239, 20);
  stroke(30, 255, 30, 100);
  strokeWeight(.75);
  for(var i = 0; i < 10; i++) {
    var x = random(-1000, 1000);
    var y = random(-900, 900);
    vertex(x, y);
  }
  endShape();
  pop();
  



  //draw earths
  push();
  rotateY(millis() / 5000);
  drawEarth((mouseX)/5, (mouseY/10)/40, 7000, 5000, 2000, 20, 3, 255); 
  pop();

  push();
  drawEarth((mouseX)/4, (mouseY/10)/20, 6000, 2000, 5000, 3, 3, 200);
  pop();

  push();
  drawEarth((mouseX)/4, (mouseY/10)/10, 400, 4000, 4000, 3, 3, 145);
  pop();

 

  //rainbow spere zone
  push();
  rotateZ(mouseX * 0.01);
  rotateX(mouseY * 0.01);
  rotateY(frameCount * 0.01);
  //texture(img);
  stroke(random(255), random(255), random(255));
  noFill();
  strokeWeight(.4);
  sphere(mouseY/3);
  theta += 0.05;
  pop();

  //floating logo
  push();
  translate(width/4, height/3);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  noStroke();
  plane(200,100);
  theta += 0.05;
  pop();
  //draw moons
  push();
  rotateX(millis() / 300);
  rotateY(millis() / 2000);
  translate(width/2, height/3);
  drawMoon(100, 400, 3);
  pop();

  push();
  rotateX(millis() / 3000);
  rotateZ(millis() / 6000);
  translate(width, height/2);
  drawMoon(100, 200, 2);
  pop();

  push();
  rotateX(millis() / 3000);
  rotateZ(millis() / 6000);
  translate(width, height/.3);
  drawMoon(100, 200, 2);
  pop();


}


// function openMain(){
//   window.open("https://verns.world/main.html");
  
// }

// function mousePressed(){
//   if (mouseY == 120 && mouseX >= 110 && <= 130){ 
//     //range accounting for text length
//     window.open("http://www.google.com", _self);
// }

function drawMoon(x, y, phase){

  //phase will be the slider, scroll bar goes from 1 to 

  let dirX = (mouseX / width - 0.5) * .5;
  let dirY = (mouseY / height - 0.5) * .5;
  directionalLight(15, 15, 42, -dirX, -dirY, -1);
  directionalLight(0, 0, 55, dirX, dirY, -0);
  directionalLight(255, 255, 255, 10, 10, -1);
  stroke(30, 255, 30, .6);
  strokeWeight(.25);
  fill(0, 20);
  ambientMaterial(250);
  cone(x, y, phase, 2);

}

function drawEarth(x, y, rx, ry, rz, s1, s2, strokeColor){
  ambientLight(255, 162, 0, .2);
  pointLight(0, 123, 255, mouseY*-1, mouseX*-1, 100);
  stroke(strokeColor, 255, 30, .6);
  strokeWeight(.75);
  fill(255, 60);
  rotateY(millis() / rx);
  rotateX(millis() / ry);
  rotateZ(millis() / rz);
  ambientMaterial(1000);
  torus(x, y, s1, s2);
}

function togglePlaying() {
  if (!tune.isPlaying()) {
    tune.play();
    tune.setVolume(0.3);
    button.html("Pause this PSYCHO SHIT");
  } else {
    tune.pause();
    button.html("Play When It Reigns It Poors X");
  }

}