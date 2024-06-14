from flask import Flask
from app.views import *

#inicializacion de la apliacion con Flask
app = Flask(__name__)

#registrar una ruta asociada a una vista
app.route('/',methods=['GET'])(index)
app.route('/api/movies/',methods=['GET'])(get_all_movies)


if __name__ == '__main__':
    #levanta servidor de desarrollo flask
    app.run(debug=True)




