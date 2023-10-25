const readline = require(`readline-sync`);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



class binarysearchtree {
  constructor() {
    this.root = null;
    this.verticalMap=new Map();
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  levelorder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  ancestor(root, n1, n2) {
    if (root === null) {
      return null;
    }
  
    while (root !== null) {
      if (n1 < root.value && n2 < root.value) {

        root = root.left;
      } else if (n1 > root.value && n2 > root.value) {
        root = root.right;
      } else {
        return root.value;
      }
    }
  
    return null;
  }
  //height
  getHeight(root) {
    if (root === null) {
      return 0;
    } else {
      const leftHeight = this.getHeight(root.left);
      const rightHeight = this.getHeight(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  VerticalOrder(root, level){
    if(!root) return null;
    else{
        if(!this.verticalMap.has(level)){
        this.verticalMap.set(level, [root.value])
        }else{
            this.verticalMap.get(level).push(root.value);
        }
        this.VerticalOrder(root.left,level-1);
        this.VerticalOrder(root.right,level+1);
    }
}
mirror(temp){
  if(temp==null){
      console.log("No elements");
  }
  else{
      if(temp.left){
          this.mirror(temp.left);
      }
      if(temp.right){
          this.mirror(temp.right);
      }
      let temp1 =  temp.left;
      temp.left = temp.right;
      temp.right = temp1;
  }
}


printVertical(){
    for(let [key,value] of this.verticalMap){
      console.log(key,value);
    }
}
  
  }



const bst = new binarysearchtree();

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(15);

//console.log(bst.search(bst.root, 15));
//bst.levelorder();
bst.VerticalOrder(bst.root,0);
bst.printVertical();
bst.mirror(bst.root);
console.log("inorder after mirror");
bst.inorder(bst.root);
// bst.verticalOrder(bst.root);
// bst.printVerticalOrder();
//console.log(bst.ancestor(bst.root, 5,15));
//console.log(bst.getHeight(bst.root));
