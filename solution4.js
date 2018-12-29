// ES6 class syntax

// Pros - Easy to read and understand
// Cons - behind the scenes same as solution 3
//        doesn't behave like traditional classes in other languages

class UserCreator {
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
const user1 = new UserCreator("Eva", 9);
user1.increment();
