const input = require(`readline-sync`)
function binarysearch(arr,target,x){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[middleIndex]){
            return middleIndex;
        }
        if(target<=arr.middleIndex){
            rightIndex=middleIndex-1;
        }else{
            leftIndex=middleIndex+1;
        }
        }
        return-1;
    }
    //console.log(binarysearch([2,4,6,8,1],1))//
    let x = input.question("Enter the Length of the Array : ")
let arr = []
for(let i=0;i<x;i++){
    arr[i] = input.question("Enter the Array Elements : ")
}
let key  = input.question("Enter the Key element to be found : ");
arr.sort();
console.log(binarySearch(arr,target,x))