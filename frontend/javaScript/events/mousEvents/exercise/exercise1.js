export const Myexercise = (value,children)=>{
  //datos de entrada
  const dad = document.getElementById(value);
  const child =document.querySelectorAll(children);

  //agregar el evento al elemento padre
    dad.addEventListener("click",(e)=>{
    
      //comprabar si el evento contiene las teclas ctrl o cmd 
        if( e.ctrlKey || e.metaKey){
          e.target.classList.add("color");
        }else{
     //si es falso agrgar la clases a un solo elemento hijo y eliminar la clase agregada del otro hijo
      for (const iterator of child) {

            let  answer = iterator.classList.contains("color");
            if(answer){
              iterator.classList.remove("color");
             }
            }
            e.target.classList.add("color");

      }
     
  })


}








//Exercise of Nazar Bodan

export const exerciseNazarBodan = (value) =>{
    let ul = document.getElementById(value);

    ul.addEventListener('click', function (event) {
    //   if (!event.target.closest('li')) return;

    
     if (event.ctrlKey || event.metaKey) {
        event.target.classList.add('selected');
     }else{
        ul.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
        event.target.classList.add('selected');
     }
   });

    //   ul.addEventListener('mousedown', function (event) {
    //       event.preventDefault();
    //    });
}





