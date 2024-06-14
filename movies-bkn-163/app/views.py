from flask import jsonify

def index():
    response = {'message':'Hola Mundo API-REST Flask 🐍'}
    return jsonify(response)

def get_all_movies():
    response = {'message':'TODAS LAS PELICULAS!'}
    return jsonify(response)

def get_movie():
    response = {'message':'TRAER UN PELI!'}
    return jsonify(response)

def create_movie():
    response = {'message':'CREANDO!'}
    return jsonify(response)

def update_movie():
    response = {'message':'ACTUALIZANDO!'}
    return jsonify(response)

def delete_movie():
    response = {'message':'ELIMINADO!'}
    return jsonify(response)

