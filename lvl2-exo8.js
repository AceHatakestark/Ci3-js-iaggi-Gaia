function average(arr) {
    if (arr.length === 0) return 0;  
    const sum = arr.reduce((total, n) => total + n, 0);
    return sum / arr.length;
}
  
const values1 = [10, 20, 30, 40];
console.log(average(values1));
  
const values2 = [];
console.log(average(values2)); 