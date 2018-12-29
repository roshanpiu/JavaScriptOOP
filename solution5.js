// Sub-classing Inheritance passing the properties and functionality down
// Factory function approach

function userCreator(name, score) {
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

function paidUserCreator(name, score, accountBalance) {
  const newPaidUser = userCreator(name, score);
  Object.setPrototypeOf(newPaidUser, paidUserFunctionStore);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctionStore = {
  increaseBalance: function() {
    this.score++;
  }
};

Object.setPrototypeOf(paidUserFunctionStore, userFunctionStore);

// these user objects has access to userFunctionStore
const user1 = userCreator("Phil", 4);
user1.login();

const paidUser1 = paidUserCreator("Roshan", 5, 100);
paidUser1.login();
paidUser1.increaseBalance();
