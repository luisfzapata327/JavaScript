class Mascota {
  constructor (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota("Akiva", 5);

console.log(miMascota.nombre);
console.log(miMascota.edad);

var tuMascota = new Mascota("Nora", 2);


// class TransbordadorEspacial {
//   constructor(planeta) {
//     this.planeta = planeta;
//   }
// }

// var zeus = new TransbordadorEspacial("Júpiter");
// console.log(zeus.planeta);

// var apolo = new TransbordadorEspacial("Marte");
// console.log(apolo.planeta);

