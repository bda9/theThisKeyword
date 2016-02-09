//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //".this" makes code more concise by using a reference to the object.  This saves resources(memory) by reduceing the need to copy or create new variables.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //I had to look this one up...
      //There are four rules, in order of precedence that can be used to determine what ".this" gets bound to.
      //1: Function invocation (Default binding) - When you invoke a function declaration or a function expression the this keyword will be bound to the global object, which in the browser is the window object.
      //2: Method invocation (Implicit binding) - When you invoke a method the this value will be bound to that object. — A method is a function that is a property of an object.
      //3: Explicit binding - We can explicitly set what the this keyword will be bound to using one of the following: ´.call()´, ´.apply()´, ´.bind()´.
      //4: Constructor invocation (New binding) - The fourth and final rule. When a function invocation is proceeded by the new keyword this will be bound to the newly created object.

  // 3) What is the difference between call and apply?

      //the both do essentially the same thing; call takes in the paramaters simply (param1, param2) and apply takes in the paramaters as an array of arguments.

  // 4) What does .bind do?

      //.bind does the same thing as call and apply, but it dosn't execute the function.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "tuber",
  email: "tuber@gmail.com",
  getUsername: function() {
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 10;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.
//Note(no tests)

getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.bind, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //the global.window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
