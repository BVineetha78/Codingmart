class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Append data to the end of the list                                                                                                                                                                                                                                                                                                                          
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++;
    }
  
    // Prepend data to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.size++;
    }
  
    // Remove the node at the kth position (0-indexed)
    removeAt(k) {
     
  
      if (k === 0) {
        this.head = this.head.next;
      } else {
        let count = 0;
        let current = this.head;
        let previous = null;
  
        while (count < k) {
          previous = current;
          current = current.next;
          count++;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
    }
    
  
    // Display the linked list
    display() {
      let current = this.head;
      while(current){
        console.log(current.data);
        current=current.next;
      }
    }
  
  getValue(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }
}
  
  // Example usage
  const list = new LinkedList();
  
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.append(4);


  list.display(); // Output: 0 -> 1 -> 2 -> 3 -> 4 -> null
  list.getValue(2);
  console.log(list.getValue(2));
  list.removeAt(2);
  list.display(); // Output: 0 -> 1 -> 3 -> 4 -> null
  