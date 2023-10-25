
function circularLinkedList() {
    
    let Node = function(element) {
      this.element = element;
      this.next = null;
    }
  
    let length = 0;
    let head = null;
  
    
  }
  
  this.getElementAt = function(index) {
    if(index >= 0 && index <= length){
      let node = head;
      for(let i = 0; i < index && node != null; i++){
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
    //Add new node
    this.append = function(element){
        //Create new node
        const node = new Node(element);
        let current;
        
        //If head is empty
        //Then make new node head
        if(head === null){
          head = node;
        }else{
          //Else add the new node as the next node
          //And mark the next of new node to the head
          current = this.getElementAt(length - 1);
          current.next = node;
        }
        
        node.next = head;
        length++;
      }
      //Insert at given position
  this.insert = function(element, index){
    if(index >= 0 && index <= length){
      const node = new Node(element);
      let current = head;
      
      //Insert at head
      if(index === 0){      
        if(head === null){
          head = node;
          node.next = head;
        }else{
          node.next = current;
          current = this.getElementAt(length);
          head = node;
          current.next = head;
        }
      }else{
        //Insert at given index (middle or end)
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      
      length++;
      return true;
    }
    return false;
  }