let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  x = x + random(-3,3);
  y = y + random(-3,3);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX, mouseY, distancia);
 
  if (distancia < 5) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
