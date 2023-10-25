// Define the BST node structure
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Perform vertical order traversal
  function verticalOrderTraversal(root) {
    if (!root) {
      return [];
    }
  
    // Map to store nodes at each vertical level
    const levelMap = new Map();
    const queue = [{ node: root, level: 0 }];
  
    while (queue.length) {
      const { node, level } = queue.shift();
  
      // Add the current node to the corresponding vertical level
      if (levelMap.has(level)) {
        levelMap.get(level).push(node.value);
      } else {
        levelMap.set(level, [node.value]);
      }
  
      // Enqueue the left and right child nodes with updated horizontal distances
      if (node.left) {
        queue.push({ node: node.left, level: level - 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }
  
    // Sort the levels based on horizontal distances
    const sortedLevels = [...levelMap.keys()].sort((a, b) => a - b);
  
    // Generate the result array by concatenating the nodes in each level
    const result = [];
    for (const level of sortedLevels) {
      result.push(...levelMap.get(level));
    }
  
    return result;
  }
  
  // Example usage:
  const root = new Node(20);
  root.left = new Node(15);
  root.right = new Node(25);
  root.left.left = new Node(10);
  root.left.right = new Node(17);
  root.right.left = new Node(23);
  root.right.right = new Node(30);
  
  console.log(verticalOrderTraversal(root));
  