// let gps = {
//     lat: -34.44444,
//     lng: -60.33333,
//     name:'un lugar'
// }

//OBJETOS JS
let movie = {
    //Propiedades
    id: 1,
    title: 'El señor de los anillos',
    year: 2004,
    director: 'Peter Jackson',
    // geolation : gps
    //Metodos    
    viewCredits: function(){
        console.log('Titulo: '+this.title);
        console.log('Año: '+this.year);
        console.log('Director: '+this.director);        
    }
}

//NOTACION DE PUNTO
movie.title = 'El señor de los anillos 3';
movie.genre = 'Ciencia Ficcion';
// console.log('Titulo: '+movie.title);
// console.log('Año: '+movie.year);
// console.log('Director: '+movie.director);
// console.log('Genero: '+movie.genre);
movie.viewCredits();

//CLASES
class Movie{
    //funcion constructura
    constructor(idValue,titleValue,yearValue,directorValue){
        //PROPIEDADES
        this.id = idValue;
        this.title=titleValue;
        this.year=yearValue;
        this.director=directorValue;
    }

    //metodos
    play(){
        console.log('Reproduciendo la pelicula '+this.title);
    }

    stop(){
        console.log('Deteniendo la reproduccion');
    }


}

//INSTANCIAS DE UNA CLASE
let movie2 = new Movie(1,'Batman 2',2006,'C. Nolan');
movie2.play();
movie2.stop();

let movie3 = new Movie(2,'Harry potter',2010,'Un director');
movie3.play();
console.log(movie3.director);

//ARRAY - VECTORES
let arrayMovies = ['Batman','Mario Bros','barbie','El señor de los anillos'];

//Acceder a un elemento en particular
console.log(arrayMovies[2]);
console.log(arrayMovies[3]);
console.log(arrayMovies[0]);
console.log(arrayMovies[1]);


//Agrega al final del array un elemento
arrayMovies.push('Anatomia de una caida');

//Elimina el ultimo elemento - te devuelve el ultimo elemento
let ultimoElemento = arrayMovies.pop();

//BUSCAR EN BASE A UN VALOR - Devuelve la posicion o bien -1 si no la encuentra
let index = arrayMovies.indexOf('Mario Bros');
console.log('Posicion encontrada: ',index);
//Elimina elementos del array dada la posición y la cantidad a eliminar.
arrayMovies.splice(index,1)

console.log(arrayMovies);

let movie6 = 'Mario Bros 2';
//Me permite verificar si un valor ya existe en el array
console.log('Hallado: ',arrayMovies.includes(movie6));


console.log(ultimoElemento);

//Obtener la logitud del array - cantidad de elementos
console.log(arrayMovies.length);

// for (let i = 0; i < arrayMovies.length; i++) {
//     console.log('Posicion: '+i+', Elemento: '+arrayMovies[i]);
// }

//Recorrido en forma inversa
// for (let i = (arrayMovies.length -1); i >= 0 ; i--) {
//     // console.log('Posicion: '+i+', Elemento: '+arrayMovies[i]);
//     //TEMPLATE STRING
//     console.log(`Posición: ${i}, Elemento: ${arrayMovies[i]}`);
// }

// FUNCIONES FLECHA o ARROW FUNCTIONS
let suma = (numero1, numero2) => {
    return numero1+numero2;
}

let suma2 = (numero1,numero2) => numero1+numero2;

console.log(suma(4,6));
console.log(suma2(10,5));

const showArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Posición: ${i}, Elemento: ${arr[i]}`);
    }
}

const showArrayInverso = (arr) => {
    for (let i = (arr.length -1); i >= 0 ; i--) {
        console.log(`Posición: ${i}, Elemento: ${arr[i]}`);
    }
}

// showArray(arrayMovies);

// arrayMovies.push('Otra pelicula');

// showArray(arrayMovies);

// FUNCIONES CALLBACK
/**
 * Funcion que recibe otra funcion para ejecutar algo
 * @param {function} callback 
 */
function showWhitCallback(callback){
    let moviesList = ['Titanic','Hombres de negro','El hobbit'];
    callback(moviesList);
}

// showWhitCallback(showArray);

// showWhitCallback(showArrayInverso);
let cantidad = 10;
//METODOS DE ARRAYS que ejecutan callbacks
arrayMovies.forEach((item,index) => {
    // console.log(item.length);
    console.log(index);
    console.log('Estoy viendo la pelicula: '+item);
});

let peliculasFiltradas = arrayMovies.filter(item => item.length <= 6);
console.log(peliculasFiltradas);

console.log(peliculasFiltradas.length);

//LOCAL STORAGE
//CREO VARIABLE EN EL LOCAL STORAGE
// localStorage.setItem('movie1','El señor de los anillos');
// localStorage.setItem('movie2','El hobbit');

//RECUPERAR LA VARIABLE DEL LOCALSTORAGE
let movie1Storage = localStorage.getItem('movie1');
console.log('Varible del localstorage: ',movie1Storage);

//SESION STORAGE
// sessionStorage.setItem('movie1Session','Rapido y furioso X');
// let movie1Session = sessionStorage.getItem('movie1Session');
// console.log('Varible del Sessionstorage: ',movie1Session);

localStorage.setItem('objectMovie',JSON.stringify(movie2));
let objectMovie = localStorage.getItem('objectMovie');
let objectMovieParse = JSON.parse(objectMovie);
console.log(objectMovieParse);
console.log(typeof(objectMovieParse));
console.log(objectMovieParse.title);
console.log(parseInt(objectMovieParse.id));

//JSON - Javascript Object Notation
let jsonString = [{
    "title": "Batman 2",
    "director": "C. Nolan",
    "release_date": "2006-03-01",
    "banner":"batman.png"
}];

// console.log(JSON.stringify(jsonString));
// console.log(typeof(JSON.stringify(jsonString)));
