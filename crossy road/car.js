function Car(){
  this.y = 0;
  this.x = random(0,width);
  this.speed = 2;
  this.rspeed = random(5,10);
  this.r = random(0,255)
  this.g = random(0,255)
  this.b = random(0,255)

  this.show = function(){
    fill(this.r,this.g,this.b);
    rect(this.x, this.y+5, 40, 30);
  }

  this.update = function(){
    this.y += this.speed;
    this.x += this.rspeed;
    if(this.x>width){
      this.rspeed = -this.rspeed;
    }
    else if (this.x<0) {
      this.rspeed = -this.rspeed;
    }
  }
  this.hits = function(bird) {
    if(this.x < bird.x && bird.x < this.x+40 && this.y < bird.y && bird.y < this.y+25){
      return true;
    }
  }
}
