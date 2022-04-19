class element{
  constructor(){
    this.father = document.getElementById("sheet");
  }
  
  //method to add elements in the element father
  addElementToClass(nameTag,contentTag,...atributes){

     let arrayAttribute = atributes;
     const tag = document.createElement(nameTag);
     tag.innerHTML = contentTag;
     //ejecuted method
     if(String(arrayAttribute)!== ""){
      this.addAttributeToElement(tag,arrayAttribute);
     }
      

     //add tag at the element father
     this.father.appendChild(tag)
  }
 
  //method to add attributes on the element tag
  addAttributeToElement(element,elementAtt){
    let nameAttribute;
    let valueAttribute;
    for(let i = 0; i< elementAtt.length; i++){
      if((i%2) == 0){
        nameAttribute = elementAtt[i];
      }else{
        valueAttribute = elementAtt[i];
        element.setAttribute(nameAttribute,valueAttribute);
      };
    };
  }
}


export{element}


