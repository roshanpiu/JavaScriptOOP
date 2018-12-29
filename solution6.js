// Constructor approach

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function() {
  this.score++;
};
UserCreator.prototype.printName = function() {
  console.log(this.name);
};

function PaidUserCreator(name, score, accountBalance) {
  // 'this' refers to the object that is automatically created 
  // when the PaidUserCreator is called with 'new' keyword

  // UserCreator.call will override the this reference in UserCreator and 
  // get the properties name and score to the newly created object in PaidUserCreator
  UserCreator.call(this, name, score);
  //userCreator.apply(this, [name, score]);
  this.accountBalance = accountBalance;
}

// intercedes the prototype chain
// paid user object's __proto__ will point to PaidUserCreator.prototype which has increaseBalance
// and PaidUserCreator.prototype object's __proto__ will point to UserCreator.prototype object
// which has increment and printName 
// UserCreator.prototype it self is an object and it's __proto__ will point to Object.prototype
// which hasOwnProperty function and ect..
// This it called JS prototype chain

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++;
}

const user1 = new UserCreator("Eva", 9);
user1.increment();
user1.printName();

const paidUser1 = new PaidUserCreator("Roshan", 10, 100);
paidUser1.increment();
paidUser1.printName();
paidUser1.increaseBalance();

/** ------------------------------------- this reference notes------------------------------- */

const obj = {
  num: 3,
  increment: function() {
    this.num++;
    console.log(this.num);
  }
};
const otherObj = {
  num: 10
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11

//  obj.increment.apply(otherObj);
//  this always refers to the object to the left of the dot on which the function (method) is
//  being called - unless we override that by running the function using .call()
//  or .apply() which lets us set the value of this inside of the increment function