class Libro {
  constructor (autor) {
    this._autor = autor;
  }
  
  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    console.log("Setter");
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("Anónimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
