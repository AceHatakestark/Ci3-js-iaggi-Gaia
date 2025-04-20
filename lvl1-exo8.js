function estPalindrome(mot) {
    if (typeof mot !== 'string') {
      console.log("Veuillez entrer un mot valide.");
      return;
      }
  
     const motNettoye = mot.toLowerCase().replace(/[^a-z0-9]/g, '');
    const motInverse = motNettoye.split('').reverse().join('');
  
    if (motNettoye === motInverse) {
      console.log(`"${mot}" est un palindrome.`);
    } else {
      console.log(`"${mot}" n'est pas un palindrome.`);
    }
  }
  estPalindrome("Kayak");
  estPalindrome("Bonjour");
  estPalindrome("Elu par cette crapule");