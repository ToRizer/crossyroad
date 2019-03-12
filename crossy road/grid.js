function Grid(){
  this.y = 0;
  this.speed = 2;

  this.show = function(){
    fill(200);
    rect(0, this.y, width, 4);
  }

  this.update = function(){
    this.y += this.speed;
  }
}
