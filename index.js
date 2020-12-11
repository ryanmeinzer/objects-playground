// Define and create an object with properties and methods with an object literal:
let dog = {
    name: "Sparky",
    breed: "German Shephard",
    age: 8,
    nameAndAge: function() { return this.name + " " + this.age }
}

console.log(dog.nameAndAge())