// const btn1 = document.getElementById("btn1");

//para agregar o eliminar eventos y handlers
btn1.onclick = ()=>{
    alert("event actived");
    btn1.onclick = null;
}

const campo = document.getElementById("campo");
const ctx = campo.getContext("2d");

ctx.fillRect(50,120,40,30)


campo.addEventListener("mousemove",(e)=>{
      valueX.textContent = e.clientX;
      valueY.textContent =e.clientY;
    //   ctx.fillRect(e.clientX, e.clientY-(200-e.clientY),40,30)
    //   ctx.clearRect(0,0,300,300);
})
