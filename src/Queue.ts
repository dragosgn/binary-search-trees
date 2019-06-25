// Queues

function Queue() {
  var collection = [];

  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function(element) {
    collection.push(element);
  };

  this.dequeue = function() {
    return collection.shift();
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
}

export default () => {
  var q = new Queue();

  q.enqueue("a");
  q.enqueue("b");
  q.enqueue("c");
  q.print();
};