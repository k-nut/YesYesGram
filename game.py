# all the imports
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash
# own imports
import random

# configuration
#DATABASE = '/tmp/flaskr.db'
DEBUG = True
#SECRET_KEY = 'development key'
#USERNAME = 'admin'
#PASSWORD = 'default'

# create our little application :)
app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
@app.route('/<number>')
def show_entries(number=4):
    #cur = g.db.execute('select title, text from entries order by id desc')
    #entries = [dict(title=row[0], text=row[1]) for row in cur.fetchall()]
    number = int(number)
    solution = []
    if number < 15:
        for x in range(0,number**2):
            solution.append(random.randint(0,1))
#    solution = [1, 0, 1, 0, 1, 1, 1, 0, 1]
    root = int(len(solution)**0.5)
    fields = root+1
    row = {}
    for c in range(0, root):
        row[c] = [0]
        for n in range(c, len(solution), root):
            if solution[n] == 1:
                row[c][-1] += 1
            else:
                row[c].append(0)
    nrow = []
    for element in row:
        # remove all the 0 from the list since it does not look good and confuses people
        while 0 in row[element]:
            row[element].remove(0)
        # if the list is empty we add one 0 so that we know that nothing goes into that row
        if row[element] == []:
            row[element].append(0)
        nrow.append(row[element])
    row = nrow
            
     
    spalte = {}
    for c in range(0, root):
        spalte[c] = [0]
        for n in range(c*root, c*root+root):
            if solution[n] == 1:
                spalte[c][-1] += 1
            else:
                spalte[c].append(0)
    nspalte = []
    for element in spalte:
        # remove all the 0 from the list since it does not look good and confuses people
        while 0 in spalte[element]:
            spalte[element].remove(0)
        # if the list is empty we add one 0 so that we know that nothing goes into that row
        if spalte[element] == []:
            spalte[element].append(0)
        nspalte.append(spalte[element])
    spalte = nspalte
        
    return render_template('index.html', fields=fields, row=row, solution=solution, spalte=spalte, length=len(solution))

if __name__ == '__main__':
    app.run()
