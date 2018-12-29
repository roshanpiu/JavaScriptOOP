// Pros - functions are not duplicated for each object creation
// Cons - Difficult to understand 
//        const newUser = Object.create(functionStore); and return newUser is boilerplate code

// In JS functions and object function combos
// JavaScript uses this proto link to give objects, functions and arrays 
// A bunch of bonus functionality. All objects by default have __proto__

// With Object.create we override the default __proto__ reference to
// Object.prototype and replace with functionStore
// But functionStore is an object so it has a __proto__ reference to
// Object.prototype - we just intercede in the chain

function userCreator(name, score) {
  // newUser Object's __proto__ property will be linked to userFunctionStore object
  // There for functions increment, logic ect.. will be available for newUser via this link 
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("You're loggedin");
  },
  printName: function() {
    console.log(this.name);
  },
  printScore: function() {
    console.log(this.score);
  }
};
// these user objects has access to userFunctionStore
const user1 = userCreator("Phil", 4); 
const user2 = userCreator("Julia", 5);
const user3 = userCreator("Roshan", 6);

user1.increment();
