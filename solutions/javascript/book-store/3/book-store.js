const PRICE = 8;

const calculateGroupCost = (size) => {
  const discounts = [0, 0, 0.05, 0.10, 0.20, 0.25];
  return size * PRICE * (1 - discounts[size]);
};

export const cost = (books) => {
  if (books.length === 0) return 0;
  
  const counts = [0, 0, 0, 0, 0];
  books.forEach(book => {
    counts[book - 1]++;
  });
  
  const memo = new Map();
  
  const findMinCost = (state) => {
    const key = state.join(',');
    if (memo.has(key)) return memo.get(key);
    
    if (state.every(c => c === 0)) {
      memo.set(key, 0);
      return 0;
    }
    
    let minCost = Infinity;
    
    for (let mask = 1; mask < 32; mask++) {
      let groupSize = 0;
      const newState = [...state];
      let valid = true;
      
      for (let i = 0; i < 5; i++) {
        if (mask & (1 << i)) {
          if (newState[i] > 0) {
            newState[i]--;
            groupSize++;
          } else {
            valid = false;
            break;
          }
        }
      }
      
      if (valid && groupSize > 0) {
        const cost = calculateGroupCost(groupSize) + findMinCost(newState);
        if (cost < minCost) {
          minCost = cost;
        }
      }
    }
    
    memo.set(key, minCost);
    return minCost;
  };
  
  return Math.round(findMinCost(counts) * 100);
};