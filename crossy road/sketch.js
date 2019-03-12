var bird;
var road = [];
var car =[];
var bush = [];
var grid =[];
var dis = 60;
function setup() {
  createCanvas(400, 600);

  bird = new Bird();
  road.push(new Road());
  car.push(new Car());
  bush.push(new Bush());
  grid.push(new Grid());

}

function draw() {

  background(175);
  createP("SCORE : " + bird.score);

  if(frameCount%20 == 0){
    grid.push(new Grid());
  }

  for(var i=grid.length-1; i >=0; i--){
    grid[i].show();
    grid[i].update();
    if(grid[i].y>height){
      grid.splice(i,1);
    }
  }


  if(frameCount%dis == 0){
    road.push(new Road());
  }

  for(var i=road.length-1; i >=0; i--){
    road[i].show();
    road[i].update();
    if(road[i].y>height){
      road.splice(i,1);
    }
  }

  if(frameCount%dis == 0){
    car.push(new Car());
  }

  for(var i=car.length-1; i >=0; i--){
    car[i].show();
    car[i].update();

    if(car[i].hits(bird)) {
      alert("Game Over !");
      bird.velocity=0;
    }

    if(car[i].y>height){
      car.splice(i,1);
    }
  }

  if(frameCount%dis == 0){
    bush.push(new Bush());
  }

  for(var i=bush.length-1; i >=0; i--){
    bush[i].show();
    bush[i].update();

    if(bush[i].hits(bird)) {
      bird.y +=40
    }

    if(bush[i].y>height){
      bush.splice(i,1);
    }
  }

  bird.update();
  bird.show();
  bird.death();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    bird.up();
  }
  else if (keyCode === DOWN_ARROW) {
    bird.down();
  }
  else if (keyCode === LEFT_ARROW) {
    bird.left();
  }
  else if (keyCode === RIGHT_ARROW) {
    bird.right();
  }
}
