/**Local Storage */
//storing Data
//method setItem(key, value)
const username = {
    name:"Manuel",
    age: 18,
    nickname:"manu",
    skills:["study", "write code","learn alone", "read code"],
    date:"22/05/2003"
};

 localStorage.setItem("use-info",JSON.stringify(username))

 localStorage.setItem("password","122344455");


 /**Read data */

 const ouputUser = JSON.parse(localStorage.getItem("use-info"));
 console.log(ouputUser.name)

 const  outputPassword = localStorage.getItem("password");
 console.log(outputPassword)


 //remove data 
 localStorage.removeItem("password");

 /**Session Storage */
//storing storage
 sessionStorage.setItem("day", "monday");

 const username2 ={
     name:"kevin",
     age:12
 }

 sessionStorage.setItem("use-info2", JSON.stringify(username2))


//read storage 
const outputDay = sessionStorage.getItem("day");
const userInfo2 = JSON.parse(sessionStorage.getItem("user-info2"));

console.log(outputDay, userInfo2);

//removing data 
sessionStorage.removeItem("day");

/**cookie */
//storing cookie
document.cookie =`name=allan`
document.cookie = `age=12`

//read cookie
const cookie = document.cookie;
console.log(cookie);


function cookiesToObject(cookie) {
    var output = {};
    cookie.split(/\s*;\s*/).forEach(function (pair) {
      pair = pair.split(/\s*=\s*/);
      output[pair[0]] = pair.splice(1).join("=");
    });
    return output;
  }
  
  // Getting Cookie Object
  const cookieObject = cookiesToObject(document.cookie);
  console.log(cookieObject["age"])

