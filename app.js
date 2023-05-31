// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// for (const mes of meses) {
//     console.log(mes);
// }












// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


// let ciudades = [];

// let ciudad = "";


// while (ciudad != null) {
//     ciudad = prompt (`ingrese el nombre de una ciudad`);
//     if (ciudad != null) {
//         ciudades.push(ciudad);
//     }
// }
// console.log(`El arreglo tiene ${ciudades.length} ciudades`);
// console.log(`Elemento 1er posicion: ${ciudades[0]}`);
// console.log(`Elemento 3er posicion: ${ciudades[2]}`);
// console.log(`Elemento ultima posicion: ${ciudades[ciudades.length-1]}`);
// ciudades.push("Paris");
// console.log(`Elemento 2da posicion: ${ciudades[1]}`);

// console.log(`Arreglo de ciudades`);
// ciudades.splice(1,1,"Barcelona");
// for (const elem of ciudades) {
//     console.log(elem);
// }









// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


// const numero = function () {
//     let num = 10;
//     while (num >6) {
//         num = Math.floor(Math.random()*10);
//     }
//     return num;
// }

// const suma = function () {
//     let nro1 = numero(); 
//     let nro2 = numero(); 
//     let sum = nro1 + nro2;

//     return sum;
// }


// let resultado;
// let apariciones = [0,0,0,0,0,0,0,0,0,0,0];

// for (let i = 0; i < 50; i++) {
//     resultado = suma();
//     switch (resultado) {
//         case 2:
//             apariciones[0]=apariciones[0]+1;
//         break;
//         case 3:
//             apariciones[1]=apariciones[1]+1;
//         break;
//         case 4:
//             apariciones[2]=apariciones[2]+1;
//         break;
//         case 5:
//             apariciones[3]=apariciones[3]+1;
//         break;
//         case 6:
//             apariciones[4]=apariciones[4]+1;
//         break;
//         case 7:
//             apariciones[5]=apariciones[5]+1;
//         break;
//         case 8:
//             apariciones[6]=apariciones[6]+1;
//         break;
//         case 9:
//             apariciones[7]=apariciones[7]+1;
//         break;
//         case 10:
//             apariciones[8]=apariciones[8]+1;
//         break;
//         case 11:
//             apariciones[9]=apariciones[9]+1;
//         break;
//         default:
//             apariciones[10]=apariciones[10]+1;
//         break;
//         }
// }

// for (const elem in apariciones) {
//     console.log(`La suma de los dados iagua a :${parseInt(elem) + 2}, aparecio ${apariciones[elem]} veces.`);
// }


// console.log(apariciones)







// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


// const comprobacion = function (numero) {
//     if (numero % 2 == 0) {
//         return "par";
//     } else{
//         return "impar";
//     }
// }

// let numero = parseInt(prompt(`ingrese un numero para saber si es par o impar`));
// console.log (`el numero ${numero} es ${comprobacion(numero)}`);





// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


// const estiloDeLetra = function (cadena) {
//     if ( cadena === cadena.toUpperCase()) {
//         return "mayusculas";
//     } else if ( cadena === cadena.toLowerCase()){
//         return "minusculas";
//     } else{
//         return "mayusculas y minusculas";
//     }
// }

// let cadena = prompt(`ingrese una cadena de texto`);
// console.log(`la cadena esta formada por ${estiloDeLetra(cadena)}`);




// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)


// const perimetro = function (l1 , l2){
//     return 2*(l1 +l2)
// }

// let l1 = parseInt(prompt(`ingrese la base del rectangulo`));
// let l2 = parseInt(prompt(`ingrese el alto del rectangulo`));

// console.log(`el perimetro del rectangulo es: ${perimetro(l1, l2)}`)





// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// const producto = function (nro, i) {
//     return nro*i;
// }

// let i = 1;
// let nro = parseInt(prompt(`ingrese un numero`));

// for (i; i < 11 ; i++) {
//     console.log(`${nro} x ${i} = ${producto(nro , i)} `)
// }
