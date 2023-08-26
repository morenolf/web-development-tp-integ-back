from models import character
from repositories import characters as charactersRepo


def create_character(character):    
    charactersRepo.add(character)