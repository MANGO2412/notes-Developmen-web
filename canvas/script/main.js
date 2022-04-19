// class cubo{
//   constructor(namePincel){
//     this.namePincel = document.getElementById(namePincel)
//   }

//   createCunick(xv, yv, width, height, color){
//     let elementCubick  = this.namePincel.getContext('2d');
    
//     //position and dimention of cubick
//     elementCubick.fillRect(xv,yv,width, height);

//     //cubick's color
//     elementCubick.fillStyle = color;

//   }
// }




let canvas = document.getElementById("tutorial");


window.addEventListener("load",()=>{


    if(canvas.getContext){
       let ctx = canvas.getContext('2d');
      
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10,10,50,50);

    }else{
      alert("your browser doesn't support");
    }
        
})


