export default class keyHandler{
    constructor(paddle){
        document.addEventListener("keydown", e =>{
            switch(e.keyCode){
              case 37:
                
                  paddle.moveLeft()
                break;

              case 39:
                  alert("move right");
                break;
            }
        })
    }
}

