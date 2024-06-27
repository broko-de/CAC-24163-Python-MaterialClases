from flask import Flask
from app.views import *
from app.database import init_app
from flask_cors import CORS

#inicializacion de la apliacion con Flask
app = Flask(__name__)

init_app(app)
#permitir solicitudes desde cualquier origin
CORS(app)

#registrar una ruta asociada a una vista
app.route('/',methods=['GET'])(index)
app.route('/api/movies/',methods=['GET'])(get_all_movies)
app.route('/api/movies/',methods=['POST'])(create_movie)
app.route('/api/movies/<int:movie_id>', methods=['GET'])(get_movie)
app.route('/api/movies/<int:movie_id>', methods=['PUT'])(update_movie)
app.route('/api/movies/<int:movie_id>', methods=['DELETE'])(delete_movie)

if __name__ == '__main__':
    #levanta servidor de desarrollo flask
    app.run(debug=True)




