// Create Object using Function Constructor in Javascript

const Computer = function(name, model)
{
    this.name = name
    this.model = model

    this.aboutComputer = function(){
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}

const dell = new Computer("dell","dk432")
const hp = new Computer("hp","g3oio")

console.log(dell);
console.log(hp);

dell.aboutComputer()
hp.aboutComputer()





// const obj = {}

// obj.name = "Amrito"
// obj.playlist = 30

// console.log(obj);

// 4 rules of function constructor
    // 1. create an empty object {}
    // 2. function is called this = {}
    // 3. {} linked to the prototype
    // 4. {} will return automatically