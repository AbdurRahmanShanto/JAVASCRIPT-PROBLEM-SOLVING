// ===============

// -------- question one -----------
function scopeTest() {
      if (true) {
            var varVariable = "I am var";
            const constVariable = "I am const";
      }
      console.log(varVariable);
//       console.log(letVariable);
//       console.log(constVariable);
}

scopeTest(); // The answer is --->  I am a var


// -----------question two ---------

function greet (name , greeting = "hello"){
      return `${name}   ${ greeting} `;
}
console.log(greet())


// -----------question three ---------

function sumOfNumber(...sum){
      let a = 0;
      for(num of sum){
            a = num + a
            console.log(a)
      }

}
sumOfNumber(1,2,3) // 6
sumOfNumber(10,20,30,40) // 100



// ----------------- qustion four 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const margeArray = [...array1 , ...array2 , ...array3];
console.log(margeArray)   // [1,2,3,4,5,6,7,8,9]



// ----------------question Five
const name = "John";
const age = 30;

const person = {
      name,
      age , 
      greeting : function (){
            return `Hi , I am ${this.name} and I am ${this.age} Years old . `
      }
}
console.log(person.greeting()) // "Hi, I'm John and I'm 30 years old."



// --------------- question Six

const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits){
      console.log(fruit)
} // apple banana cherry


// ------------- question Seven


const myName = "Alice";
const myAge = 25;


const message = `Hi , I am ${myName} and I am ${myAge} Years old . `;
console.log(message); // "My name is Alice and I am 25 years old."


// ----------------- question Eight

const students = [
      { name: "Alice", grade: 90 },
      { name: "Bob", grade: 85 },
      { name: "Charlie", grade: 92 }
];

for (let key of students){
      console.log(key)
      console.log(key.name)
      console.log(key.grade )
}


// --------------- question Nine 
const nestedArrays = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
];
for (let innerArray of nestedArrays){
      let num = 0;
      for (number of innerArray ){
            num += number
      }
      console.log(num)
}


// ------------------ question Ten

const a = 5;
const b = 10;

const result = `he sum of ${a} and ${b} is 15.`;
console.log(result); // "The sum of 5 and 10 is 15."