const readline = require(`readline-sync`)
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarysearchtree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
        }
    }
}
 search(root,value){
    if(!root){
        return false
    }else{
        if(root.value===value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
 }
 preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
 }
 inorder(root){
    if(root){
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
 }
 postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value)
    }
 }
 levelorder()
 {
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let cur=queue.shift()
        console.log(cur.value)
    
    if(cur.left){
queue.push(cur.left)
if(cur.right)
queue.push(cur.right)
    }
    }
 }
 ancestor(root,n1,n2){
    if(root==null)
    {
        return null
    }
    let val=true
    while(val){
        if((n1>root.value&&n2<root.value)||(n1<root.value&&n2>root.value)){
            return root.value
        }
        else if(n1<root.value||n2<root.value){
            if(root.left!=null)
            {
                root=root.left
            }
            else if(n1>root.value||n2>root.value){
                if(root.right!=null){
                    root=root.right
                }
            }else{
                return root.value
                val=false
            }
        }
    
        }
    }
 }

const bst=new binarysearchtree()
//console.log("tree is Empty",bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)

// while(true){
//     let x= parseInt(readline.question("enter the number:"))
//     if(x<0){
//         break}
//         bst.insert(x)
//     }

//console.log(bst.search(bst.root,30))
//bst.levelorder()
// console.log(bst.ancestor(bst.root,5,3))