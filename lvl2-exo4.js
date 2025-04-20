function reverseWords(str) {
    return str
      .trim()                  
      .split(/\s+/)           
      .reverse()               
      .join(' ');             
  }
const input = " Salut mes petites beautés! ";
const output = reverseWords(input);
console.log(output); 