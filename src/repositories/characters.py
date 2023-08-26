from flask_sqlalchemy import SQLAlchemy
from models import character

tableName = 'characters'

db = SQLAlchemy()

class characterDB():
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30), nullable=False)

def add(character):
    characterInsert = characterDB()
    characterInsert.name = character.name    
    db.session.add(characterInsert)
    db.session.commit()
    
    character.id = characterInsert.id
    
    return character