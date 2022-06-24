// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
// ESTE COMANDO toUpperCase() SIRVE PARA TRANSFORMAR MINUSCULAS EN MAYUSCULAS!!! 
// nombre[0].toUpperCase() LE ESTOY DICIENDO QUE LA LETRA QUE ESTA EN POSICION 0 CAMBIE A MAYUSCULA
// ESTE COMANDO slice() SIRVE PARA CONCATENAR EL RESTO DE LA ORACION LA CUAL NOS QUEDO
// a r i o
// 1 2 3 4 
// nombre.slice(1) le estoy diciendo que empieze a unir las letras desde el 1 en adelante si yo quisiera concatenar todas menos la ultima pondria:
// nombre.slice(1,4) = "Mari"

 
 return nombre[0].toUpperCase() + nombre.slice(1)

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  // return cb() es lo mismo que return cb (cb)

return cb(cb)
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb (n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 // for (var i = 0; i<numeros.length; i++ ){
  // console.log(numeros [i]);
  // numeros.reduce es lo mismo que hacer el bucle for. Dentro de el escribimos una numero.reduce (function (i=0 , argumento){ return i + argumento }
  // si quisiera que empieze desde i = 1 en vez de i = 0 escribo  {return i + argumento} ,1);

var SumaReduce = numeros.reduce(function (i,argumento){
  return i + argumento;
});
cb(SumaReduce);

  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    return cb(elemento)

  });

  }




function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  nuevoArray = array.map(function (elemento){
    return cb (elemento) 

  });
  return nuevoArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
// ["bjo", "lert", "ztec", "rbol"] lo que tengo que enviar 
return array.filter(function (elemento){
  return elemento [0] === 'a'

});


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
