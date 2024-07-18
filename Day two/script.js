
// -------------- question one ----------

const myDetails ={
      name : 'abdur rahman',
      age : 19
}

const {name , age} = myDetails;
console.log(name , age);          // abdur rahman 19





// -------------- question two -----

import {circle} from './circle.js'
console.log(circle(10))   // The Rectangle area is : 100






// --------------- question three ------

function Rectangle (height , width){
      return height * width ;
}
let area = Rectangle( 10 , 10);
console.log('The Rectangle area is : ' + area) // The Rectangle area is : 100






// ----------------- question four -----------------

class person {
      constructor(firstname , lastName){
            this.firstname = firstname;
            this.lastName = lastName;
            this.learning = ''
      }
      get fullName () {
            return `my name is ${this.firstname + this.lastName}`
      }
      
}

const p = new person ('Abdur Rahman' , ' (Shanto )')
console.log(p.fullName)  // my name is Abdur Rahman (Shanto )





// ------------------- question five -----------------

class circle1{
      constructor (radius){
            this.radius = radius;
      }
      get circumference(){
            return  2 * Math.PI * this.radius
      }
}

let c = new circle1(10)
console.log(c.circumference)




// -------------------- question six -------------


const userName = 'Your user name  '
const firstName = 'Your first name '
const lastName = 'Your last name '

const myInfo = {
      [firstName] : 'abdur',
      [lastName] : ' rahman',
      [userName]: 'abdur rahman',
      age : 18
}
console.log(myInfo)


// --------------------- question Seven -------------

class Animal{
      constructor(dogName){
            this.dogName = dogName;
      }
}

class Dog extends Animal {
      constructor(dogName , dogAge){
            super(dogName);
            this.dogAge = dogAge;
      }
}

let d = new  Dog('Coco' , 5)
console.log(d)



// ---------------------- question Eight -----------------
class Shape {
      constructor() {
            if (new.target === Shape) {
                  throw new Error('Your shape draw is not possible');
            }
      }
}

class MyCircle extends Shape {
      constructor(radius) {
            super();
            this.radius = radius;
      }

      getArea() {
            return Math.PI * this.radius * this.radius;
      }
}

try {
      const shape = new Shape(); 
} catch (error) {
      console.error(error.message);
}

const myCircle = new MyCircle(10);
console.log('Circle area:', myCircle.getArea()); // Your shape draw is not possible



// --------------- question Nine--------------

class MathUtil {
      static square(num) {
            return num * num;
      }
}

const result = MathUtil.square(5);
console.log(result);      // Output: 25



// ---------------------question Ten ------------

const myName = Symbol ('myname');
const object = {
      [myName] : 'i am abdur rahman'
};

console.log(object);