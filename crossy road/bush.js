function Bush(){
  this.y = 40;
  this.x = random(0,10)*40
  this.x2 = random(0,10)*40
  this.x3 = random(0,10)*40
  this.x4 = random(0,10)*40
  this.speed = 2;

  this.show = function(){
    fill(0,200,10);
    rect(this.x, this.y+5, 40, 30);
    rect(this.x2, this.y+5, 40, 30);
    rect(this.x3, this.y+5, 40, 30);
    rect(this.x4, this.y+5, 40, 30);
  }

  this.update = function(){
    this.y += this.speed;
  }
  this.hits = function(){
    if(this.x-20 < bird.x && bird.x < this.x+60 && this.y-15 < bird.y && bird.y < this.y+32.5){
        return true;
    }
    if(this.x2-20 < bird.x && bird.x < this.x2+60 && this.y-15 < bird.y && bird.y < this.y+32.5){
        return true;
    }
    if(this.x3-20 < bird.x && bird.x < this.x3+60 && this.y-15 < bird.y && bird.y < this.y+32.5){
        return true;
    }
    if(this.x4-20 < bird.x && bird.x < this.x4+60 && this.y-15 < bird.y && bird.y < this.y+32.5){
        return true;
    }
  }
}
