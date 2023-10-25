class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function mergeLinkedLists(list1, list2) {
    
    let mergedList = new Node(null);
    let current = mergedList;
  
    
    let set = new Set();

    let temp = list1;
    while (temp != null) {
      if (!set.has(temp.value)) {
        set.add(temp.value);
        current.next = new Node(temp.value);
        current = current.next;
      }
      temp = temp.next;
    }
  
    
    temp = list2;
    while (temp != null) {
      if (!set.has(temp.value)) {
        set.add(temp.value);
        current.next = new Node(temp.value);
        current = current.next;
      }
      temp = temp.next;
    }
  
    return mergedList.next; 
  }

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(4);


let list2 = new Node(3);
list2.next = new Node(4);
list2.next.next = new Node(5);
list2.next.next.next = new Node(6);


let merged = mergeLinkedLists(list1, list2);


while (merged != null) {
  console.log(merged.value);
  merged = merged.next;
}
    