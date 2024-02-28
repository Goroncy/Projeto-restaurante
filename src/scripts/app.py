from flask import Flask
from flask_cors import CORS
from datetime import date
#import psycopg2
#from psycopg2 import Error
import sqlite3

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

@app.route('/tabela')
def getTabela():
#    try:
#        connection = psycopg2.connect(
#            user="postgres",
#            password="977130",
#            host="localhost",
#            port="5432",
#            database="yakisoba"
#        )
#        cursor = connection.cursor()
#        cursor.execute("SELECT * FROM PEDIDOS")
#
#        records = cursor.fetchall()
#    except(Exception, Error) as error:
#        print("Erro ao conectar ao PostgreSQL:", error)
#    finally:
#        if (connection):
#            cursor.close()
#            connection.close()
    conn = sqlite3.connect('/home/goroncy/yakisoba.db')
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM PEDIDOS''')
    result = cursor.fetchall()
    conn.commit()
    print(result) 
    cursor.close()
    return result

@app.route('/totalPedidos')
def getTotalPedidos():
    dia = date.today()
    conn = sqlite3.connect('/home/goroncy/yakisoba.db')
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM PEDIDOS WHERE DATAS = ' + "'" +dia.strftime("%d/%m/%Y")+"'")
    result = cursor.fetchall()
    conn.commit()
    print(result) 
    cursor.close()
    return result

@app.route('/totalValor')
def getTotalValor():
    dia = date.today()
    conn = sqlite3.connect('/home/goroncy/yakisoba.db')
    cursor = conn.cursor()
    cursor.execute('SELECT SUM(VALOR) FROM PEDIDOS WHERE DATAS = ' + "'" +dia.strftime("%d/%m/%Y")+"'")
    result = cursor.fetchall()
    conn.commit()
    print(result) 
    cursor.close()
    return result