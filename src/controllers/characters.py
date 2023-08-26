import json
from flask import request
from models.character import character

def characters():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        return json
    else: 
        return 'Content-Type not supported!'


def createCharacter():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        character = characterFromRequest(json)
        return character
    else: 
        return 'Content-Type not supported!'
    
    
    
def characterFromRequest(request):
    j = json.loads(request)
    return character(**j)