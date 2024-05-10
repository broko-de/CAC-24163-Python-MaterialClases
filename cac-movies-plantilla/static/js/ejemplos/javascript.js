/*
console.log('Hola mundo JS, desde un archivo externo');

// COMENTARIO DE UNA LINEA
/*
    Comentario de 
    varias lineas
    😁


//DECLARACION DE UNA VARIABLE
var movie1; // undefined

//DECLARACION Y DEFINICION DE UNA VARIABLE
let movie2 = 'El padrino'; //string ""
let rating = 8; //number - integer
let rating2 = 2; //number - float
let rating3 = "8"; //string

let isNew = true; // boolean o logico false/true

let movie3 = null;

let movie4 = {
    name:'El padrino 3',
} // Objeto en Javascript

// console.log(typeof(rating));
// console.log(typeof(isNew));
console.log(typeof(movie1));
console.log(typeof(movie3));
console.log(typeof(movie4));

//OPERACIONES ARITMETICAS
let average = (rating + rating2 + parseInt(rating3)) / 3;
console.log(rating3+rating + rating2);

//OPERACION DE CONCATENACION
console.log('El promedio es: '+average);


const YEAR = 2024;

// DOM
let parrafo = document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML = 'Hola lo agrego desde JS 😍';

*/

//ESTRUCTURA CONDICIONAL
let condicion = false;
if(condicion){
    // Si la condición es verdadera
    console.log('Se esta cumpliendo la condicion');
    alert('Hola');
}else{ // OPCIONAL
    //Si la condición es falsa
    console.error('No se cumple la condicion');
}

console.log('Continuando el programa');

let age = 13;

// if( age >= 13){
//     console.log('Podes ver la pelicula');
// }else{
//     console.error('No tienes la edad suficiente para ver la pelicula');
// }

if (age==13){
    console.log('Puedes ver la peli, te ganaste unos 🍿');
    // alert('podes ingresar');
}else if (age > 13){
    console.log('Puede ver la pelicula');
}else{
    console.error('No tienes la edad suficiente para ver la pelicula');
}

let ticket = false;

if(age >= 13 && ticket==true){
    console.log('Puede ingresar a la sala');
}else{
    console.log('No puedes ingresar a la sala.');
}

//IF TERNARIO
let watchMovie = (age >= 13 && ticket==true)?
                        'Puedes ingresar a la sala 🎥':
                        'No puedes ingresar a la sala 🛑';
console.log(watchMovie);

//ESTRUCTURA SWITCH CASE
let rating = 4;
switch (rating) {
    case 5:{
            console.log('⭐⭐⭐⭐⭐');
            break;
        }
    case 4:
        console.log('⭐⭐⭐⭐');
        break;
    case 3:
        console.log('⭐⭐⭐');
        break;
    case 2:
        console.log('⭐⭐');
        break;
    case 1:
        console.log('⭐');
        break;
    default:
        console.log('----');
        break;
}


//Estructuras Repetitivas
let tickets = 1; // contador
// while (tickets <= 10) {
//     console.log('Tickets vendidos: ', tickets);
//     tickets= tickets+1; //tickets++
// }


// do {
//     console.log('Tickets vendidos do-while: ',tickets)
//     tickets= tickets+1;
// } while (tickets <= 5);

for (let i =10; i > 6; i--) {
    console.log('Tickets vendidos "FOR": ',i);
}

