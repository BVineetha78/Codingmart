const input = require(`readline-sync`)
function hashcode(str){
    let q=5;
    let s=0;
    for(let i=0;i<str.length;i++){
        let qq=Math.pow(q,i);
        // console.log(qq);
        s+=(str.charCodeAt(i))*qq;
        console.log(s);
    }
    return s;
}
function search(str,keyhashcode,m){
    for(let i=0;i<=str.length -m;i++){
      j=i;
      let s=str.slice(i,i+m);
    if(keyhashcode==hashcode(s)){
        console.log(i);
    }
    }
}
let txt = input.question("Enter the String : ")
let key = input.question("Enter the Key : ")
let keyhashcode=hashcode(key);
// console.log(keyhashcode);
search(txt,keyhashcode,key.length);