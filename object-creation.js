//using object literal
const student = {name:'shakib' , job:'cricketer'};
//object constructor
const person = new Object();
console.log(person);
//object using create

const human = Object.create(student);
console.log(human.job);


// class using for create function
class People {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
console.log(peop);



// syntechical sugar

// function

function Manus(name){
    this.name = name;
}
const man = new Manus('Lader');
console.log(man);