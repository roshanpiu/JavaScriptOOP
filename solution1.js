// Pros - Easy to reason about
// Cons - Functions gets newly created for each object even though they are same

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  newUser.printName = function() {
      console.log(newUser.name);
  }
  newUser.printScore = function() {
    console.log(newUser.score);
  }
  return newUser;
}
const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
const user3 = userCreator("Roshan", 6);

user1.increment();
user1.printName();
user2.printScore();

