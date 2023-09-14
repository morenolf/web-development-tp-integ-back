class Character {
    constructor(userId, name, cloth){   
        this.userId = userId;
        this.id = 0;     
        this.name = name;
        this.cloth = cloth;
    }    
}

class Cloth {
    contructor(head, body, legs, feet){
        this.head = head;
        this.body = body;
        this.legs = legs;
        this.feet = feet;
    }
}

const CharacterFromRequest = function(body) {
    cloth = Cloth(
        body('head'),
        body('body'),
        body('legs'),
        body('feet')
    );
    return Character(
        body('name'),
        cloth
    )
}

module.export = {
    CharacterFromRequest
}