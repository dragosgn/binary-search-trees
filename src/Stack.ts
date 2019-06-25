// Stacks
// first in first out type of service

// functions: push, op, peek, length / size

var letters = []; // this is out stack

var word = "racecar";

var rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log("leters", letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a paindrome.");
}

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // adds a value onto the end of the stack
  this.push = function(value: number) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  };

  this.size = function() {
    return this.count;
  };

  // Return the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

export default () => {
  var myStack = new Stack();

  myStack.push(1);
  myStack.push(2);

  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.peek());
  myStack.push("freeCodeCamp");
  console.log(myStack.size());
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.peek());
};
