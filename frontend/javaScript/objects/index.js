//the first way to defined an object
const myCar = new Object();


//add properties
myCar.make = 'Chevrolet';
myCar.model = 'Camaro'
myCar.year = 2010;


console.log(myCar);



//the  second way to defined an object
const myCell = {
	"make cell": "samsung",
	"model cell": "As1",
	"color cell": "black"
}

// console.log(myCell.color)
console.log(myCell["color cell"])


const myObj = {
	str: 'myString',
	rand: Math.random(),
	obj: new Object()
}


myObj.typae = "Dot syntax";

myObj["data type messag"] = "hello User, how are you?";



console.log(myObj)


//call propierties with variables
let propertyName = "make";
myCar[propertyName] = "ram"

propertyName = "model"
myCar[propertyName] = "ram 2021"

propertyName = "year"
myCar[propertyName] = 2021
console.log(myCar);




//other example
//obj.hasOwnProperty(i), object.keys(0) and 
//object.getOwnPropertyNames(0), object.keys(0) and 
//object:getOwnPropertyNames(0)






function showProps(obj, objName) {
	let result = '';
	for (let i in obj) {

		result += `${objName}.${i} = ${obj[i]}\n`;

	}

	console.log(result);

}


showProps(myCar, "myCar");

//using a constructor function


function displayCar() {
	const result = `A Beautiful ${this.year} ${this.make}`;
	//prettyPrint(result);

	console.log(result);


}

function car(make, model, year, own) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.own = own;
	this.displayCar = displayCar;
}


function person(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;

}


const manu = new person("Manuel", 18, "Masculino");
const tobi = new person("Tobi", 2, "Macho");



let hondaCivic = new car("Honda", "Honda civic", "2012", manu);
let fordExplorer = new car("Ford", "Ford explorer", "2008", tobi)

console.log(hondaCivic.own.name);
console.log(fordExplorer.own.name)

hondaCivic.displayCar();



//using the object.creat method
const Animal = {
	name: '',
	type: '',
	displayType: function () {
		console.log(this.name + this.type)

	}

}



const animal1 = Object.create(Animal);

animal1.name = "Rabbit  ";
animal1.type = "Invertebrates";
animal1.displayType();


const animal2 = Object.create(Animal);

animal2.name = "Cat ";
animal2.type = "Invertebrates "
animal2.displayType();




person.prototype.numCell = null
manu.numeCell = 661626332;
console.log(manu)



//defining getters and settters
//the first example
const o = {
	a: 7,
	get b() {
		return this.a + 1;
	},
	set c(x) {
		this.a = x / 2
	}
}

o.c = 11

console.log(o.a);
console.log(o.b);



const age  = {
	e: 0
}

Object.defineProperties(age,{
	'b':{get: function (){
		return this.e + 1
	}},
	'c':{set: function (x){
       this.e = x/2;
	}}
})


//setter 
age.c = 40;


//getter
console.log(age.b)


//Deleting properties








