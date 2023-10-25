class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Insert a node at a specific position
  insertAt(data, position) {
    if (position < 0 || position > this.size) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      this.prepend(data);
    } else if (position === this.size) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let count = 0;

      while (count < position) {
        current = current.next;
        count++;
      }

      

      
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
      this.size++;
    }
  }

  // Remove a node at a specific position
  removeAt(position) {
    if (position < 0 || position >= this.size) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      if (this.head.next) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
    } else if (position === this.size - 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      let current = this.head;
      let count = 0;

      while (count < position) {
        current = current.next;
        count++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
  }

  // Get the value at a specific position
  getAt(position) {
    if (position < 0 || position >= this.size) {
      console.log("Invalid position");
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < position) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  // Print the list
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " ";
      current = current.next;
    }

    console.log(result.trim());
  }
}

// Example usage
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(1.5, 2);
list.print(); // Output: 0 1 1.5 2

