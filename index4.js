// OOP Prototype Javascript Programming Challenge

const HouseRent = function(amount){
    this.amount = amount
}

HouseRent.prototype.houseRentIncrementbyYearly = function(){
    this.amount += 1000;
    console.log(`Next year my house rent will be ${this.amount}`);
}

HouseRent.prototype.houseRentDecrementbyYearly = function(){
    this.amount -= 1000;
    console.log(`Next year my house rent will be ${this.amount}`);
}

const myHouse = new HouseRent(15000)

console.log(myHouse);
myHouse.houseRentIncrementbyYearly()
myHouse.houseRentIncrementbyYearly()
console.log(myHouse);
myHouse.houseRentDecrementbyYearly()