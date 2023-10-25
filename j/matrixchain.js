function matrixChainMultiplication(dims) {
    const n = dims.length - 1; // Number of matrices in the chain
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
  
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i < n - len + 1; i++) {
        const j = i + len - 1;
        dp[i][j] = Infinity;
  
        for (let k = i; k < j; k++) {
          const cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
          dp[i][j] = Math.min(dp[i][j], cost);
        }
      }
    }
  
    return dp[0][n - 1];
  }
  const dims = [10, 30, 20, 40];
const minScalarMultiplications = matrixChainMultiplication(dims);
console.log("Minimum scalar multiplications:", minScalarMultiplications);