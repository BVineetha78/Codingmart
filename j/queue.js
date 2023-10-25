class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      
      }
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
  
      const dequeuedValue = this.head.data;
      this.head = this.head.next;
  
      if (!this.head) {
        this.tail = null;
      }
  
      return dequeuedValue;
    }
  
    peek() {
      if (!this.head) {
        return null;
      }
  
      return this.head.data;
    }
  0
    display() {
      if (!this.head) {
        console.log("Queue is empty.");
        return;
      }
  
      let temp= this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  
  
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log("Queue:");
  queue.display(); 
  
 console.log("peek", queue.peek()); 
  
 // console.log("Dequeued:", queue.dequeue());
  
  console.log("Queue:");
  queue.display(); 
  