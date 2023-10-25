class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
  
      const poppedNode = this.top;
      this.top = poppedNode.next;
      poppedNode.next = null;
      this.size--;
  
      return poppedNode.data;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
  
      return this.top.data;
    }

  
  display() {
    if (this.isEmpty()) {
      console.log('Stack is empty.');
      return;
    }

    let temp = this.top;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log('Stack elements:');
  stack.display(); 
  
 stack.pop(); 
  
  console.log('Stack elements after pop:');
  stack.display(); 
  stack.peek();
  stack.display();