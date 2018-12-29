// Pros - fewer lines of code
//        Still typical practice in professional code

// Cons - difficult to understand
//        need to use capital for the first letter on UserCreator to denote it requires a new keyword

// Notes - Object creation and return is automated with the 'new' keyword
// In JS functions are both objects and functions

// When we call the constructor function with new in front we automate 2 things
// 1. Create a new user object and 'this' keyword within the function is used to refer to new user
// 2. return the new user object

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// when the UserCreator is called with the 'new' keyword
// we will get a new object with some properties attached to
// if we need to link function to that object's __proto__
// we need to put those function in to UserCreator's prototype object
// these function will be available for us through __proto__
// when we use 'new' to call UserCreator and create objects

UserCreator.prototype.increment = function() {
  this.score++;
};
UserCreator.prototype.decrement = function() {
  const decrement = () => {
    this.score++; 
    // If we use regular functions to declare decrement 'this' will refer to global scope
    // Fix that by using arrow functions
  };
  decrement();
};
UserCreator.prototype.login = function() {
  console.log("login");
};
UserCreator.prototype.printName = function() {
  console.log(this.name);
};
UserCreator.prototype.printScore = function() {
  console.log(this.score);
};

const user1 = new UserCreator("Eva", 9);
const user2 = new UserCreator("Scott", 9);
const user3 = new UserCreator("Roshan", 9);

user1.increment();
user1.login();
user2.printName();
user3.printScore();
