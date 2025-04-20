function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // [2, 4, 6, 8]
