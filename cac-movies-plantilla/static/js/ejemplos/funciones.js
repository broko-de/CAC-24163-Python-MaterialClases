function helloWorld(){
    //cuerpo de la funcion
    console.log('Hola mundo con funciones 😋');
}

//llamada de la función
// helloWorld();

/**
 *  Funcion que calcula el precio final con descuento
 * @param {number} price - precio de la entrada
 * @param {number} discountPercentage - porcentaje de descuento
 * @returns el precio final
 */
function calculateDiscountPrice(price,discountPercentage=0){ //especifica un valor por defecto al parametro
    // console.log(discountPercentage);
    let discount = (price * discountPercentage) / 100;
    let priceWithDiscount = price - discount;

    return  priceWithDiscount;
}

let originalPrice = 10000;
let discountPercentage = 50;
//LLAMADA DE LA FUNCION CON ARGUMENTOS
// let finalPrice = calculateDiscountPrice(discountPercentage,originalPrice);
// console.log('El precio final es $'+finalPrice);

console.log(calculateDiscountPrice(500));

//FUNCIONES EXPRESIVAS
const helloWorld2 = function(){
    console.log('Hola mundo con funciones expresivas 🤩');
    
}

helloWorld2();

//SCOPE DE VARIABLES
//ALCANCE GLOBAL
let globalMovie = "Inception";

function watchMovie(){
    // variable local
    let localMovie = "El señor de los anillos";
    localMovie = 'Mario bros';
    if(true){
        //A NIVEL DE BLOQUE
        let movie2 = "Harry Potter";
    }

    console.log("Estoy viendo: "+localMovie);

    console.log("Estoy viendo: "+movie2);

    console.log("Estoy viendo: "+globalMovie);
}

watchMovie();
// console.log("Estoy viendo: "+localMovie);
console.log("Estoy viendo: "+movie2);


