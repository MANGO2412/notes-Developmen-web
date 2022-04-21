class paddle{
    constructor(gameWidth,gameHeight,color){
      this.width = 150;
      this.height = 30;
      this.position = {
         x: gameWidth/2-this.width/2,
         y:gameHeight-this.height-10
      }
      this.color = color;

      this.maxSpeed = 10;
      this.speed = 0;
    }

    draw(render){
       render.fillStyle = this.color;
       render.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    update(deltaTime){
        if(!deltaTime) return;
        this.position.x += this.speed;


    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }
}


export{paddle}