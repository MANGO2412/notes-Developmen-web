import {paddle}from './padle.js'
import keyHandler from './keyEvent.js'

const screenCanva = document.getElementById("screenCanva");
const ctx = screenCanva.getContext('2d');





let rect1 = new paddle(600,800,"red");
rect1.draw(ctx);
new keyHandler(rect1);


let lasTime = 0;
const loopGame = (timesTamp)=>{
    let deltaTime = timesTamp - lasTime;
    lasTime = timesTamp
    
    
   // ctx.clearRect(0,0,800,800);
    rect1.update(deltaTime);
    rect1.draw(ctx);

    requestAnimationFrame(loopGame);
}

loopGame(0,0)



