from app.database import get_db

class Movie:

    #contructor
    def __init__(self,id_movie=None,title=None,director=None,release_date=None,banner=None):
        self.id_movie = id_movie
        self.title = title
        self.director = director
        self.release_date = release_date
        self.banner = banner

    def serialize(self):
        return {
            'id_movie':self.id_movie,
            'title':self.title,
            'director':self.director,
            'release_date':self.release_date.strftime('%Y-%m-%d'),
            'banner':self.banner,
        }

    @staticmethod
    def get_all():
        #logica de buscar en la base todas las peliculas
        db = get_db()
        cursor = db.cursor()
        query = "SELECT * FROM movies"
        cursor.execute(query)
        #obtengo resultados
        rows = cursor.fetchall()
        movies = [Movie(id_movie=row[0], title=row[1], director=row[2], release_date=row[3], banner=row[4]) for row in rows]
        #cerramos el cursor
        cursor.close()
        return movies

    def save(self):
        db = get_db()
        cursor = db.cursor()
        if self.id_movie:
            cursor.execute("""
                UPDATE movies SET title = %s, director = %s, release_date = %s, banner = %s
                WHERE id_movie = %s
            """, (self.title, self.director, self.release_date, self.banner, self.id_movie))
        else:
            cursor.execute("""
                INSERT INTO movies (title, director, release_date, banner) VALUES (%s, %s, %s, %s)
            """, (self.title, self.director, self.release_date, self.banner))
            #voy a obtener el último id generado
            self.id_movie = cursor.lastrowid
        db.commit() #confirmar la accion
        cursor.close()

    @staticmethod
    def get_by_id(movie_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM movies WHERE id_movie = %s", (movie_id,))
        row = cursor.fetchone()
        cursor.close()
        if row:
            return Movie(id_movie=row[0], title=row[1], director=row[2], release_date=row[3], banner=row[4])
        return None

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("DELETE FROM movies WHERE id_movie = %s", (self.id_movie,))
        db.commit()
        cursor.close()
