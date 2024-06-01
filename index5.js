// Class in Javascript oop

// class declaration
// class MyName{}

// class expretion
// const myName = class {}

class Computer{
    constructor(name, model){
        this.name = name
        this.model = model
    }
    
    aboutComputer(){
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}

const dell = new Computer("dell", "3kdfs")

console.log(dell);
dell.aboutComputer()