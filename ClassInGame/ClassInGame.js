class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque;

        switch (this.type) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}


let hero = new Hero('Spadashinn', 25, 'guerreiro');
hero.atacar();  // O guerreiro atacou usando usou espada