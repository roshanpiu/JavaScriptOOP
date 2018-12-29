// ES6 Class approach

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

class PaidUser extends User {
  constructor(name, score, accountBalance) {
    super(name, score);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    this.accountBalance++;
  }
}
const user1 = new User("Eva", 9);
user1.increment();

const paidUser1 = new PaidUser("Roshan", 10, 100);
paidUser1.increment();
paidUser1.login();
paidUser1.increaseBalance();
