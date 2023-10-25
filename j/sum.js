const input = require('readline-sync');


const x = input.question("Enter the number");

function calculateSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (i % 2=== 0) {
        sum += i ; 
      } else {
        sum += i*i; 
      }
    }
    return sum;
  }
  
  
  const result = calculateSum(x);
  console.log(result); 