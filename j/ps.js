function calculateTypingTime(password) {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  
    let totalTime = 1; // First number always takes 1 sec
    let previousNumber = password[0];
  
    for (let i = 1; i < password.length; i++) {
      const currentNumber = password[i];
      if (currentNumber === previousNumber) {
        
        continue;
      }
  
      let found = false;
  
      
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (keypad[row][col] === previousNumber) {
            
            if (
              (row - 1 >= 0 && keypad[row - 1][col] === currentNumber) || // Top
              (row + 1 < 3 && keypad[row + 1][col] === currentNumber) || // Bottom
              (col - 1 >= 0 && keypad[row][col - 1] === currentNumber) || // Left
              (col + 1 < 3 && keypad[row][col + 1] === currentNumber) // Right
            ) {
              totalTime += 1; // Adjacent number takes 1 sec
              found = true;
              break;
            }
          }
        }
  
        if (found) {
          break;
        }
      }
  
      if (!found) {
        totalTime += 2;      // Number not adjacent to the previous number takes 2 sec
      }
  
      previousNumber = currentNumber;
    }
  
    return totalTime;
  }
  
  const password = [1, 2, 5, 8, 9, 6];
  const typingTime = calculateTypingTime(password);
  console.log("Total time required to type the password:", typingTime, "seconds");
  