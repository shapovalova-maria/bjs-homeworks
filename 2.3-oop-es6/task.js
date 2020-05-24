class Weapon {
    constructor (name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    }
        
    takeDamage(damage) {
        this.damage = damage;
        this.durability = this.durability - this.damage;
    if (this.durability <= 0) {
        this.durability = 0;
    } return this.durability;     
    } 
  
    getDamage() {
    if (this.durability == 0) {
        return 0;
    } else if (this.durability <= durability * 0,3) {
        this.attack = this.attack / 2;
    } return this.attack;          
    }

    isBroken() {
    return this.durability > 0;
    }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
  });

  const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });

  const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
  });

// let hand = new Weapon('Рука', 1, Infinity, 1);
// let archery = new Weapon('Лук', 10, 200, 3);
let sword = new Weapon('Меч', 25, 500, 1);
let blade = new Weapon('Нож', 5, 300, 1);
let stick = new Weapon('Посох',	8, 300, 2);



