function genererFibonacci(n) {
    const suite = [];
  
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        suite.push(0);
      } else if (i === 1) {
        suite.push(1);
      } else {
        suite.push(suite[i - 1] + suite[i - 2]);
      }
    }
  
    return suite;
  }
  
  const input = prompt("Combien de termes de la suite de Fibonacci voulez-vous afficher ?");
  const n = parseInt(input, 10);
  
  if (isNaN(n) || n <= 0) {
    alert("Veuillez entrer un nombre entier positif.");
  } else {
    const resultat = genererFibonacci(n);
    alert("Les " + n + " premiers termes de la suite de Fibonacci sont :\n" + resultat.join(', '));
  }