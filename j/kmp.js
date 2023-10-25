// let input = require(`readline-sync`)
let str = "codingmart"
let key = "c"
let pi =[]

let piT = function(){
    // to find pi table
    pi[0] = 0;
    let i=1;
    while(i<key.length){
        let left = 0,count=0
        while(i<key.length){
            if(key.charAt(left)==key.charAt(i)){
            left++;
            count++;
            pi.push(count)
            i++;
        }else{
            count = 0;
            pi.push(count)
            left = 0;
            i++;
            break;
        }
    }
}
console.log(pi);
}
function matchString(){
    // key = '$'+key;
    // let res = []
    let j=0,i=0;
    while(i<str.length){
        if(str[i]==key[j]){
            i++;
            j++;
        }
        else if (i<str.length && key[j]!=String[i]){
            if(j!=0) 
            {
               j=pi[j-1];
            }
            else 
            i++;
        }

        if(j == key.length){
            console.log(i,j);
            console.log(`found at index ${(i-j)}`);
            j = pi[j-1];
    }
    }
//    return res;
}

piT();
matchString();