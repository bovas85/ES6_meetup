// // let Keyword:
//
// function letMe() {
//
// 	var a = 1;
// 	var b = 2;
//
// 	if (a === 1) {
// 		var a = 10;
// 		let b = 20;
// 		console.log(a, b);
// 	}
//
// 	 console.log(a, b); // 10 - 2 (let is block scoped)
// }
//
// letMe();


// let in loops: https://repl.it/DmWr/2

//////////////////////////////////////////////
// let loops:

// function letLoops() {
//
// 	for (var i = 1; i < 6; i++) {
// 			setTimeout(function() {
// 				console.log(i);
// 		}, i * 1000);
// 	}
// }
//
// letLoops();

// function letLoops() {
//
// 	for (var i = 1; i < 6; i++) {
// 		(function(i) {
// 			return setTimeout(function() {
// 				console.log(i);
// 		}, i * 1000)})(i);
// 	}
//
// }
//
// letLoops();

// const:
//
// function constants() {
//
// 	const animal = "cat";
// 	// animal = "dog";
// 	return animal;
//
// }
//
// console.log(constants());


//
// // const does *not* make objects immutable:
// function constObj() {
//
// 	const alex = {
// 		name: "Alex",
// 		age: false,
// 		occupation: "administrator"
// 	}
//
// 	// alex.occupation = "developer";
// 	return alex;
//
// }
//
// console.log(constObj());

// const add = function(x, y) {
// 	return x + y;
// }
//
// const multiply = (x, y) => x * y;
//
// const multiplyByThree = x => x * 3;
//
//
// // Returning an object literal - Fix me!!
// const getObject = (name, job) => { return {
//   name : name,
//   job : job
// }
// }
//or

// ({
//   name : name,
//   job : job
// })






//Arrow me!
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// let mappedArr = arr.map(function(n){
// 	return n * 7;
// });
// var mappedArrow = arr.map(n => n * 7);
// //$('.error').html(mappedArrow);
// console.log(mappedArr, mappedArrow);
//
// // Lexical 'this':
// function Person(name, likes) {
// 	this.name = name;
// 	this.likes = likes;
// }

// Ordinary functions have their own internal 'this'
// Arrow functions always refer to the 'this' in their outer environment
// Fix the .printLikes() method below so that it works properly with "Alex"
// Person.prototype.printLikes = function() {
// 	this.likes.forEach(function(x) {
// 		this.name = this.name || "A person";
// 		$('.error').append((`${this.name} likes ${x}`+ "<br>"));
// 	});
// }
// How do we solve this problem in ES5?
// Person.prototype.printLikes = function() {
// 	this.likes.forEach((x) => {
// 		this.name = this.name || "A person";
// 		$('.error').append($("<li />").append(`${this.name} likes ${x}`+ "<br>"));
// 	});
// }
//
// let alex = new Person("Alex", ["flying", "cakes", "pizza", "cats", "javascript"]);
//
// alex.printLikes();
//
// // Template Literals
//
// function pickAJob(name, job) {
// 	return name + " is a " + job;
// }
//
// console.log("Concatenated: ");
// console.log(pickAJob("Alex", "developer"));
//
// function pickAJobJoined(name, job) {
// 	return [name, "is a", job].join(" ");
// }
//
// console.log("Joined Array: ");
// console.log(pickAJobJoined("Alex", "developer"));



// var jobList = ["cleaner", "bartender", "developer", "jet pilot", "total loser"];

// function pickAJobTemplate(name, jobs) {
// 	let randInt = Math.floor(Math.random() * jobs.length);
// 	return `${name} is a ${jobs[randInt]}`
// }

// $('.error').append((pickAJobTemplate("Alex", jobList))+ "<br>");

// Complete the function below so that all five tests return "true"
// Try to use your new ES6 skills:
function concatenateStrings(name, item, number) {
  if (number === 0) {
    return `${name} has no ${item}s`;
  }
  else if (number > 1) {
    return `${name} has ${number} ${item}s`;
  }
  else {
    return `${name} has ${number} ${item}`;
  }
}
// or use ternary but very long
// return `${name} has ${(number === 0) ? "no" : number}
// ${(number > 1) ? }


console.log(concatenateStrings("Alex", "cat", 2) === "Alex has 2 cats");

$('.error').append(concatenateStrings("Alex", "cat", 2) + "<br>");

console.log(concatenateStrings("Alex", "computer", 1) === "Alex has 1 computer");

$('.error').append(concatenateStrings("Alex", "computer", 1) + "<br>")

console.log(concatenateStrings("Kimi", "leg", 4) === "Kimi has 4 legs");

$('.error').append(concatenateStrings("Kimi", "leg", 4) + "<br>");

console.log(concatenateStrings("Joe", "sandwich", 1) === "Joe has 1 sandwich");

$('.error').append(concatenateStrings("Alex", "cat", 2) + "<br>");

console.log(concatenateStrings("Adam", "beer", 0) === "Adam has no beers");

$('.error').append(concatenateStrings("Alex", "cat", 2) + "<br>");

function multiply(x, y) {
  y = y || 2; // way to prevent avoiding NaN for single variables
  return x * y;
}

console.log(multiply(3)); // NaN or 2

function multiplyEs6(x, y = 3) {
  //y = y || 2; // ES5
  return x * y;
}

console.log(multiplyEs6(3));


// You can access the arguments of a function using the 'arguments' keyword
const testing = function() {
	return arguments;
}

// The arguments are given as an 'array-like object':
console.log(testing(1, 2, 3, 4, 5));

// The arguments keyword cannot access the arguments within an arrow function:
// const testing = () => arguments; -- Throws an error!

//The alternative is to use the rest '...' operator:
const addOddNumbers = (...numbers) => numbers.reduce((a, b) => b % 2 > 0 ? a + b : a, 0);

// Now the function can take any number of arguments and they will be accessed as an array
// Much simpler to work with!
console.log(addOddNumbers(1, 2, 3, 4, 5));
console.log(addOddNumbers(1));
console.log(addOddNumbers());
console.log(addOddNumbers(11, 24, 343, 8, 51));

const alex = {
	name: "Alex",
	age: 30,
	job: "developer"
},

carlos = {
	name: "Carlos",
	age: 23,
	job: "doctor"
},

maria = {
	name: "Maria",
	age: 45,
	job: "teacher"
},

eleanor = {
	name: "Eleanor",
	age: 25,
	job: "jet pilot"
};

// Create the following functions:
// An array containing all the jobs of the person objects passed in:
$('.error').append("Jobs:" + "<br>");
const listAllJobs = function(...names) {
  // const listAllJobs = function(...names) { return names.map(names => names.job);
  // }
  for (var i in names) $('.error').append(names[i].name + " is a " + names[i].job + "<br>");
}

// The mean average (sum / number of values) age of all the people passed in:

const averageAge =  function(...names) {
  let sum = 0;
  for (var i in names) {
    sum += names[i].age;
  }
  $('.error').append("The sum is " + sum / names.length);
  return sum / names.length;
}



// You will need to use the rest operator. Try to also use some of the other features you have learned so far (such as arrow functions). Your functions will be called below:

console.log(listAllJobs(alex, carlos, eleanor)); // [ 'developer', 'doctor', 'jet pilot' ]
console.log(averageAge(alex, carlos, maria, eleanor)); // 30.75
