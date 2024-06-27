from flask import jsonify, request
from app.models import Movie

def index():
    response = {'message':'Hola Mundo API-REST Flask 🐍'}
    return jsonify(response)

def get_all_movies():
    movies = Movie.get_all()
    return jsonify([movie.serialize() for movie in movies])

def get_movie(movie_id):
    movie = Movie.get_by_id(movie_id)
    if not movie:
        return jsonify({'message': 'Movie not found'}), 404
    return jsonify(movie.serialize())

def create_movie():
    #obtengo los datos enviados en formato json - convierte en un diccionario python
    data = request.json
    #PROCESO DE VALIDACION 
    #if(data['title']==''):
    #    return jsonify({'message':'El campo titulo es obligatorio'}), 500    
    new_movie = Movie(None,data['title'],data['director'],data['release_date'],data['banner'])
    new_movie.save()
    response = {'message':'Pelicula creada con exito'}
    return jsonify(response) , 201

def update_movie(movie_id):
    movie = Movie.get_by_id(movie_id)
    if not movie:
        return jsonify({'message': 'Movie not found'}), 404
    data = request.json
    movie.title = data['title']
    movie.director = data['director']
    movie.release_date = data['release_date']
    movie.banner = data['banner']
    movie.save()
    return jsonify({'message': 'Movie updated successfully'})

def delete_movie(movie_id):
    movie = Movie.get_by_id(movie_id)
    if not movie:
        return jsonify({'message': 'Movie not found'}), 404
    movie.delete()
    return jsonify({'message': 'Movie deleted successfully'})

