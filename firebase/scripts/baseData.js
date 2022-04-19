/**
 * codigo para establecer conexion con la libreria del backend
 */

// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
 import{list} from './main.js'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDUPu6uWkmq91-wrYco-WKEYIOIijpvaVQ",
   authDomain: "pract-9d9a3.firebaseapp.com",
   projectId: "pract-9d9a3",
   storageBucket: "pract-9d9a3.appspot.com",
   messagingSenderId: "928060432479",
   appId: "1:928060432479:web:e65f808d5950bb94617bea"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //conexion a la base de datos
const db = getFirestore()

 //para agregar tareas a la base de datos
 const saveTask = (title,description)=>{
     addDoc(collection(db,"commit"), {title,description});
 }

 //mostrar y actualizar elementos
 const getCommit =  ()=>{
    
     onSnapshot(collection(db,"commit"), (querySnapShot)=>{
        let txt = '';
        querySnapShot.forEach(element => {
            let dato = element.data();
            txt += `
             <div>
                <h2>${dato.title}</h2>
                <p> ${dato.description}</p>
             </div>
            `
        });
        list.innerHTML = txt;
     })
 }

 export {saveTask, getCommit}

