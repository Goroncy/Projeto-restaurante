from flask import Flask
from flask_cors import CORS
import psycopg2
from psycopg2 import Error

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

@app.route('/tabela')
def getTabela():
    try:
        connection = psycopg2.connect(
            user="postgres",
            password="977130",
            host="localhost",
            port="5432",
            database="yakisoba"
        )
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM PEDIDOS")

        records = cursor.fetchall()
    except(Exception, Error) as error:
        print("Erro ao conectar ao PostgreSQL:", error)
    finally:
        if (connection):
            cursor.close()
            connection.close()
    return records;
