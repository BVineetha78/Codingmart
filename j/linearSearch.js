function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
if(array[i]===target) {
    return i;
}
}
return -1;
}
const numbers=[4,6,8,9,0];
const targetNumber=0;
const index=linearSearch(numbers,targetNumber) ;      
    console.log("target number fount at index",index);