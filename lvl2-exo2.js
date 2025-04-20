function getCapitalizedWords(arr) {
    return arr.filter(word => /^[A-Z]/.test(word));
}
const input = ['un peu', 'Petasse', 'un peu', 'Connasse', 'quoique', 'Je Fasse', 'je te', 'dépasse'];
const capitalized = getCapitalizedWords(input);
console.log(capitalized); 