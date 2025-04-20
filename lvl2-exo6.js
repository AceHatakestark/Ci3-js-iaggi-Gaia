function sortBooksByTitle(books) {
    return books
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
  }
const library = [
    { title: 'One piece', author: 'Eiichirō Oda', year: 1997 },
    { title: 'Mythologie égyptienne: Un Voyage à traversles Divinités, les Pharaons et les Rites Millénaires', author: ' Iannick DeWilde', year: 2024 },
    { title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943 },
    { title: 'Le Hobbit', author: '	J.R.R. Tolkien', year: 1937 }
];
  
const sortedLibrary = sortBooksByTitle(library);
console.log(sortedLibrary);
 