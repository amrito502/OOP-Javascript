// Prototype and Prototypical Chaining in Javascript

const Computer = function(name, model)
{
    this.name = name
    this.model = model

    // this.aboutComputer = function(){
    //     console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    // }
}

Computer.prototype.aboutComputer = function(){
    console.log(`this computer name is ${this.name} and the model is ${this.model}`);
}

const dell = new Computer("dell","dk432")
const hp = new Computer("hp","g3oio")

console.log(Computer.prototype === dell.__proto__);

console.log(dell.hasOwnProperty("name"));

// console.log(Object.getPrototypeOf(dell));

// console.log(dell.__proto__);

// let arr = [2,3,5]

// let obj = {
//     name: "code abc"
// }

// console.log(obj);
// console.log(Object());