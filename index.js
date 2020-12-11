// Define and create an object with properties and methods with an object literal:
let dog = {
    name: "Sparky",
    breed: "German Shephard",
    age: 8,
    nameAndAge: function() { return this.name + " " + this.age }
}

console.log(dog.nameAndAge())

// display object property values with loop
function display() {
    for (property in dog) {
        console.log(dog[property])
    }
}

display()

// display object property values in/converted-to an array with Object.values()
console.log(Object.values(dog))

// display object property values in/converted-to a JSON string with JSON.stringify()
console.log(JSON.stringify(dog))