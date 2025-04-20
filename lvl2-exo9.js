function isPalindrome(str) {
    const sanitized = str
      .toLowerCase()
      .replace(/[^a-z]/g, '');
    const reversed = sanitized
      .split('')
      .reverse()
      .join('');
    
    return sanitized === reversed;
}
console.log(isPalindrome("Élu par cette crapule"));            
console.log(isPalindrome("Bonjour le monde"));              
console.log(isPalindrome("Mon nom"));                       
console.log(isPalindrome("Engage le jeu que je le gagne")); 