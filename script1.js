function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo
  return arreglo.shift();        // Remover el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Después: " + JSON.stringify(miArreglo));
