function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels("ice hockey"));      
console.log(countVowels("AEIOU et products"));       
console.log(countVowels("BCDFGH"));