//mouse events

let action1 = document.getElementById("action1");


//click => 0
action1.addEventListener("click",(e)=>{
    alert("that event is a click: " + e.type)
})

action1.addEventListener("mousedown", (e)=>{
    alert("that event is a mousedown: "+e.button);
})


action1.addEventListener("mouseup",(e)=>{
    alert("That event is a mousep: "+e.button)
})


//mousemove

const caja = document.querySelector("#caja");

let isDrawing = false;
let x = 0;
let y= 0;

const ctx = caja.getContext('2d');

caja.addEventListener("mousedown",(e)=>{
    x = e.offsetX;
    y = e.offsetY;

    isDrawing = true;
})


caja.addEventListener('mousemove', e =>{
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }

})


window.addEventListener("mouseup", e =>{
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
})

function drawLine(context,x1,y1,x2,y2){
  context.beginPath();
  context.strokesStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.stroke();
  context.closePath();
}


///comtextmenu



//modifiers shift, alt, ctrl and meta
/**
 * shiftkey
 * altkey
 * ctrlkey
 * metakey
 */

const mod = document.getElementById("mod");

mod.addEventListener("click",e =>{
    if(e.altKey && e.shiftKey){
        alert("you actived that alert, it's very good");
    }else if(e.ctrlKey){
      let name = prompt("What's your name?");
      alert("welcome "+name);
    }
})



//other example with mousemove 
//coordinates: clientX/Y, page X/Y
const ubication  = document.querySelector(".ubication");

ubication.addEventListener("mousemove", e =>{
    document.getElementById("cx").textContent = e.clientX;
    document.getElementById("cy").textContent = e.clientY;
    
    
    document.getElementById("px").textContent = e.pageX;
    document.getElementById("py").textContent = e.pageY;
    
})


