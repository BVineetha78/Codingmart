class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Insert a node at the beginning of the list
    insertAtBeginning(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; 
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = newNode;
      }
    }
  
    // Insert a node at the end of the list
    insertAtEnd(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; 
      } else {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Remove a node from the list
    remove(data) {
      if (!this.head) {
        return;
      }
  
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (current.data === data) {
          if (previous === null) {
            // The node to be removed is the head node
            this.head = current.next;
          } else {
            // The node to be removed is not the head node
            previous.next = current.next;
          }
  
          break;
        }
  
        previous = current;
        current = current.next;
      }
    }
    // Display the elements in the list
    display() {
      if (!this.head) {
        console.log("List is empty.");
        return;
      }
  
      let current= this.head;
  
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  
  const circularList = new CircularLinkedList();
  
  circularList.insertAtEnd(1);
  circularList.insertAtEnd(2);
  circularList.insertAtEnd(3);
  
  circularList.display(); 
  
  circularList.insertAtBeginning(0);
  
  // circularList.display(); 
  
  circularList.remove(3);
  
  circularList.display(); 
  