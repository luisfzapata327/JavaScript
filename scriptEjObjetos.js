function buscarElementoQuimico (simbolo) {
  var simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio"
  }

  return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al"));