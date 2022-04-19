 import { saveTask, getCommit} from './baseData.js'

export const list = document.getElementById("listCommit")
window.addEventListener("load", async()=>{
    getCommit();
})




const form1 = document.getElementById("form1");
form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    
     const titleForm =  form1["title"];
     const textForm = form1["textForm"];


    saveTask(titleForm.value,textForm.value);
    form1.reset()
    
})

