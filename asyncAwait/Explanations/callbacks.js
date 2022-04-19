//Example 1
setInterval(() => {
  console.log("Example 1","hello!");  
}, 1000 );


//Example 2
const list = ['man','woman','child'];

const newList = list.map((val)=>{
 return val + "kind"
});


console.log("Example 2",newList);




//Example 3
const greeting = (name)=>{
  console.log("Example 3",`Hello ${name}, welcome`);
}


function introduction (firstname,lastname, callback){
  const fullName = firstname + lastname;
  callback(fullName);
}

introduction("Kevin", "Velazquez",greeting);