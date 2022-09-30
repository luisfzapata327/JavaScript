const persona = {
  nombre: "Isabel",
  presentarse() {
    return `Hola! Mi nombre es ${this.nombre}`
  }
};

console.log(persona.presentarse());

// const persona = {
//   nombre: "Isabel",
//   presentarse: function () {
//     return `Hola! Mi nombre es ${this.nombre}`;
//   }
// }

// console.log(persona.presentarse());