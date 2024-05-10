window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

//EJEMPLO DE UNA PROMESA
// const tickets =15;

// const playMovie = new Promise(function(resolve,reject){
//     if(tickets >=10){    
//         resolve(`Hay ${tickets} tickets vendidos, podemos ver la pelicula.`)
//     }else{
//         reject('No se han vendido los tickets suficientes, se cancela la pelicula');
//     }
// });

// console.log('INICIANDO SCRIPT');

// playMovie.then((miResultado)=>{
//     console.log(miResultado);
// })
// .catch((error)=>{
//     console.error(error);
// }).finally(()=>{
//     console.log('FIN DE LA PROMESA');
// })

// console.warn('CONTINUANDO SCRIPT');
const options = {
    method: 'GET',
    headers :{
        accept: 'application/json',
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
}

const fetchMoviesPromesa  = () => {
    //COLOCAR LOGICA DE ESPERA
    fetch('https://api.themoviedb.org/3/movie/popular',options)
    .then(response => response.json()) // CONVERTIR A FORMATO JSON LA RESPUESTA DEL SERVIDOR
    .then(responseTransform => {
        console.log(responseTransform);  
        let movies = responseTransform.results;
        const divPopular = document.querySelector('#popular-list');
        movies.forEach(movie => {
            const html = `
                    <div class="movie-item">
                        <a href="./templates/detail-movie.html" >
                            <img  class="movie-item-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                            <div class="movie-item-detail">
                                <p class="movie-item-detail-title">${movie.title}</p>
                                <p class="movie-item-detail-subtitle">${movie.release_date} - ${movie.vote_average}</p>
                            </div>
                        </a>
                    </div>
            `;
            divPopular.insertAdjacentHTML('beforeend',html);
        });
        
    })
    .catch(error => console.error(error));
}

const fetchMoviesAyncAwait = async () => {
    try {
        // Hace una solicitud HTTP GET a la URL del servidor seguida de '/movie/popular'. La palabra clave await pausa la ejecución hasta que la promesa devuelta por fetch se resuelva. La variable 'response' contendrá la respuesta HTTP.
        const response =  await fetch(`https://api.themoviedb.org/3/movie/popular/movie/popular`, 
        option);
        // const response = await axios(`${URLSERVER}/movie/popular`, options);
        console.log('Esperando resolución');
        // Utiliza la palabra clave await para pausar la ejecución hasta que la promesa devuelta por response.json() se resuelva. La variable 'data' contendrá el cuerpo de la respuesta JSON.
        const data = await response.json();
        const movies = data.results;
        console.log(data);

        const divPopular = document.querySelector('#popular-list');
        movies.forEach(movie => {
            const html = `
                    <div class="movie-item">
                        <a href="./templates/detail-movie.html" >
                            <img  class="movie-item-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                            <div class="movie-item-detail">
                                <p class="movie-item-detail-title">${movie.title}</p>
                                <p class="movie-item-detail-subtitle">${movie.release_date} - ${movie.vote_average}</p>
                            </div>
                        </a>
                    </div>
            `;
            divPopular.insertAdjacentHTML('beforeend',html);
        });

    } catch (err) {
        console.error(err)
    }
    
}

fetchMoviesPromesa();
