function trouverMotLePlusLong(mots) {
    if (!Array.isArray(mots) || mots.length === 0) {
      console.log("Le tableau est vide ou invalide.");
      return;
    }
  
    let motLePlusLong = mots[0];
  
    for (let i = 1; i < mots.length; i++) {
      if (mots[i].length > motLePlusLong.length) {
        motLePlusLong = mots[i];
      }
    }
  
    console.log("Le mot le plus long est :", motLePlusLong);
  }
  
  // Exemple d'utilisation
  const tableauDeMots = ["sisi", "feur", "resistance", "quoi"];
  trouverMotLePlusLong(tableauDeMots);