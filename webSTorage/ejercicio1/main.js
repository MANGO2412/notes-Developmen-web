//main variables
const elementList = [document.getElementById("namepost"), document.getElementById("content")];
const form = document.getElementById('form');
//function converStringObeject's the variables
let arrayObjectElement = [];


/**functions */
//store functions
const  localStorageTaks = () =>{
   let keyName =  converStringObject(elementList[0].value);
   localStorage.setItem(keyName, elementList[1].value);

   arrayStoreData(keyName);
}

//localStorageTaks's sub functions
const converStringObject = (value)=>{
 let array = value.split("");
 let valueReturn = "";
   for(let i = 0; i< array.length; ++i){
      valueReturn += array[i]     
   }

   return valueReturn
}

const arrayStoreData = (value)=>{
    if(arrayObjectElement !== "" && localStorage.getItem("keyItems")!== null){

      arrayObjectElement = JSON.parse(localStorage.getItem("keyItems"));

      arrayObjectElement[lengthIndex(arrayObjectElement) + 1] = value;

      localStorage.setItem("keyItems",JSON.stringify(arrayObjectElement))
      
    }else{
        arrayObjectElement[0] = value
        localStorage.setItem("keyItems", JSON.stringify(arrayObjectElement));
    }
}

const lengthIndex = (value) =>{
    let valueReturn;
   for(let i = -1; i !== value.length; i ++){
       valueReturn = i;
   }
   return valueReturn;
}


//get and read store function
const getReadStoreData = (value)=>{
  let keyValue;
  arrayObjectElement = JSON.parse(localStorage.getItem("keyItems"));

 for(let i = 0; i <= arrayObjectElement.length; i++){
     if (value == arrayObjectElement[i]) {
         keyValue = arrayObjectElement[i];
         break;
     }
 }

 const dataValue = localStorage.getItem(keyValue);
 console.log("title   ", keyValue)
  console.log("content  ",dataValue);
   elementStorage(keyValue, dataValue);
}

//localStorage's sub functions
const elementStorage = (title, content)=>{
     const father = document.getElementById("listTask");

     //creted elements children
      const children = document.createElement("div");
       children.classList.add("task")
      //sub children
       const h3 =  document.createElement("h3");
       const p = document.createElement("p");

       //content 
        h3.textContent = title;
        p.textContent = content;

        //appendnchild
        children.appendChild(h3);
        children.appendChild(p);

        father.appendChild(children);
}


if(localStorage.getItem("keyItems") !== null){
    let keyName;
    let object = JSON.parse(localStorage.getItem("keyItems"));
  
   for(let i = 0; i < object.length; i++){
           keyName = object[i];
           const dataValue = localStorage.getItem(keyName);
           elementStorage(keyName, dataValue);      
   }
  
}

//clear inputs
const clearInputs = (inputs)=>{
   for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
   }
}
//code important of form
form.addEventListener('submit',resetEvent);

function resetEvent(event) {
   event.preventDefault();
   if(form[0].value !== "" && form[1].value !==""){

    localStorageTaks()
    getReadStoreData(elementList[0].value);
    clearInputs(form);
    
   }else{
       alert("complete all inpust")
   }
    
}

