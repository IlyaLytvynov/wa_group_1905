function test() {
  console.log('Test');
}

function greeting () {
  console.log(this);
  console.log('Hello my name is, ' + this.name);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = greeting;
}

function Developer(name, age, lang) {
  this.name = name;
  this.age = age;
  this.lang = lang;
  this.greet = greeting;
  this.develop = function () {
    console.log('Written code at ' + this.lang);
  }
}

const person = new Person('John', 30);
const person2 = new Person('Jack', 20);
const js = new Developer('Jack', 20, 'JS');
const dotNetDev = new Developer('Vasyl', 20, 'c#');
const javaDev = new Developer('John', 20, 'Java');

person.greet();
person2.greet();
dotNetDev.develop();
js.develop();
javaDev.develop();
debugger;
console.log(Object.keys(person));



// function counter() {
//   const btn = document.querySelector('#btn');
//   let clickCounter = 0;
//
//   btn.addEventListener('click', () => {
//     clickCounter++;
//     console.log(clickCounter);
//   })
// }
//
// counter();