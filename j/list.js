class Node {
constructor(data) {
    this.data=data;
    this.next=null;
}
}
class linkedlist {
    constructor() {
        this.head=null;
    }
    insertAtBeginninng(newData){
        let newNode=new Node(newData);
        newNode.next=this.head;
        this.head=newNode;
    }
    printlist() {
        let current=this.head;
        while(current){
            console.log(current.data +"");
            current=current.next;
        }
        console.log();
    }
}
let list= new linkedlist();
list.insertAtBeginninng(3);
list.insertAtBeginninng(2);
list.insertAtBeginninng(1);
console.log("linked list after insertion:");
list.printlist();