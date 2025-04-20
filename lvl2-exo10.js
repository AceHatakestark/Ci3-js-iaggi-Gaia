function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
console.log(intersection(a, b));