class Movie{

    constructor(id,title,director,rating,releaseDate,banner){
        this.id=id;
        this.title=title;
        this.director=director;
        this.rating=rating;
        this.releaseDate=releaseDate;
        this.banner=banner
    }

}

// const movie1 = new Movie(1,'Damsel','Un director',4.5,'2024-03-01','https://image.tmdb.org/t/p/w500//sMp34cNKjIb18UBOCoAv4DpCxwY.jpg');

// const movie2 = new Movie(2,'Dune 2','Un director 2',5,'2024-04-01','https://image.tmdb.org/t/p/w500//8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg');

// const movie3 = new Movie(3,'Kunfu panda 4','Un director 2',5,'2024-04-01','https://image.tmdb.org/t/p/w500//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg');

// let movies = [movie1,movie2,movie3];

// localStorage.setItem('movies',JSON.stringify(movies));

// console.log(movies);

function showMovies(){
    
    //BUSCAR LO QUE HAY EN LOCAL STORAGE
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    //buscar elemento HTML donde quiero insertar las peliculas
    const tbodyMovies = document.querySelector('#list-table-movies tbody');
    // const tbodyMovies = document.getElementById('#tbody-table-movies');
    //limpio el contenido de la tabla
    tbodyMovies.innerHTML = '';
    movies.forEach(movie => {
        //TEMPLATE STRING - TEMPLATE LITERAL 
        const tr = `
                    <tr>
                        <td>${movie.title}</td>
                        <td>${movie.director}</td>
                        <td>${movie.rating}</td>
                        <td>${movie.releaseDate}</td>
                        <td>
                            <img src="${movie.banner}" alt="${movie.title}" width="30%">
                        </td>
                        <td>
                            <button class="btn-cac" onclick='updateMovie(${movie.id})'><i class="fa fa-pencil" ></button></i>
                            <button class="btn-cac" onclick='deleteMovie(${movie.id})'><i class="fa fa-trash" ></button></i>
                        </td>
                    </tr>
        `;
        tbodyMovies.insertAdjacentHTML('beforeend',tr);
    });

}

/**
 * funcion que permite agregar o modificar una pelicula al listado de peliculas
 * almacenado en el localstorage
 */
function saveMovie(){
    
    //Obtengo el elemento HTML del formulario
    const form = document.querySelector('#form-movie');

    //obtengo los inputs del formulario
    const inputId = document.querySelector('#id-movie');
    const inputTitle = document.querySelector('#title');
    const inputDirector = document.querySelector('#director');
    const inputRating = document.querySelector('#rating');
    const inputReleaseDate = document.querySelector('#release-date');
    const inputBanner = document.querySelector('#banner-form');

    //Realizo una validación simple de acuerdo al contenido del value del input del titulo
    if(inputTitle.value.trim() !== ''){
        //Busca en localstorage el item movies, si no existe asigna el array vacio.
        let movies = JSON.parse(localStorage.getItem('movies')) || [];

        //Si el input de ID es distinto de vacio, es porque se trata de una acción de UPDATE
        if(inputId.value!==""){
            //Busco dentro del arraya de movies el objeto a editar
            const movieFind = movies.find(movie => movie.id == inputId.value);
            //Si existe actualizo el objeto
            if (movieFind) {
              movieFind.title = inputTitle.value;
              movieFind.director = inputDirector.value;
              movieFind.rating = inputRating.value;
              movieFind.releaseDate = inputReleaseDate.value;
              movieFind.banner = inputBanner.value;
            }
        }else{
            let newMovie = new Movie(
                movies.length+1,
                inputTitle.value,
                inputDirector.value,
                inputRating.value,
                inputReleaseDate.value,
                inputBanner.value,
            );
            movies.push(newMovie);
        }

        //Se actualiza el array de peliculas en el localstorage
        localStorage.setItem('movies',JSON.stringify(movies));
        showMovies();
        //Se limpian los inputs del formulario
        form.reset();
        Swal.fire({
            title: 'Exito!',
            text: 'Operacion exitosa.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'Por favor completa el campo Titulo.',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        });
    }

}

/**
 * Function que permite cargar el formulario para editar una pelicula
 * de acuedo al id de la pelicula
 * @param {number} movieId id movie que se va a actualizar
 */
function updateMovie(movieId){
    let movies = JSON.parse(localStorage.getItem('movies'));
    //se utiliza el metodo find para poder asegurarnos que exista una pelicula con el id que queremos eliminar.
    let movieToUpdate = movies.find(movie => movie.id===movieId);
    if(movieToUpdate){
        //Se buscan los elementos HTML del input
        const inputId = document.querySelector('#id-movie');
        const inputTitle = document.querySelector('#title');
        const inputDirector = document.querySelector('#director');
        const inputRating = document.querySelector('#rating');
        const inputReleaseDate = document.querySelector('#release-date');
        const inputBanner = document.querySelector('#banner-form');
        //Se cargan los inputs con los valores de la pelicula encontrada
        inputId.value = movieToUpdate.id;
        inputTitle.value = movieToUpdate.title;
        inputDirector.value = movieToUpdate.director;
        inputRating.value = movieToUpdate.rating;
        inputReleaseDate.value = movieToUpdate.releaseDate;
        inputBanner.value = movieToUpdate.banner;
    }
}

/**
 * Function que permite eliminar una pelicula del array del localstorage
 * de acuedo al indice del mismo
 * @param {number} movieId id movie que se va a eliminar
 */
function deleteMovie(movieId){
    let movies = JSON.parse(localStorage.getItem('movies'));
    //se utiliza el metodo find para poder asegurarnos que exista una pelicula con el id que queremos eliminar.
    let movieToDelete = movies.find(movie => movie.id===movieId);
    if(movieToDelete){
        //se utiliza el metodo filter para actualizar el array de movies, sin tener el elemento encontrado en cuestion.
        movies = movies.filter(movie => movie.id !== movieToDelete.id);
        //se actualiza el localstorage
        localStorage.setItem('movies',JSON.stringify(movies));
        showMovies();
        Swal.fire({
            title: 'Exito!',
            text: 'La pelicula fue eliminada.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }
}

// NOS ASEGURAMOS QUE SE CARGUE EL CONTENIDO DE LA PAGINA EN EL DOM
document.addEventListener('DOMContentLoaded',function(){

    const btnSaveMovie = document.querySelector('#btn-save-movie');

    //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
    btnSaveMovie.addEventListener('click',saveMovie);
    showMovies();
});
