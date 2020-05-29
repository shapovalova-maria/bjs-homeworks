class Weapon {
    constructor ({'name': name, 'attack': attack, 'durability': durability, 'range': range}) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.initialDurability = durability;
    }
        
    takeDamage(damage) {
        this.durability = this.durability - damage;
    if (this.durability <= 0) {
        this.durability = 0;
    } return this.durability;
    } 
  
    getDamage() {

    if (this.durability === 0) {
        return 0;
    } else if (this.durability <= this.initialDurability * 0,3) {
        return this.attack / 2;
    } else {
        return this.attack;
    }     
    }

    isBroken() {
    return this.durability <= 0;
    }
}

class Bow extends Weapon {

}

class Arm extends Weapon {
 
  
}

class Blade extends Weapon {

}

class Knife extends Weapon {

}

class Staff extends Weapon {

}

class LongBow extends Bow {

}

class Axe extends Blade {

}

class StormStaff extends Staff {

}

// const sword = new Weapon({
//     name: 'Старый меч',
//     attack: 20,
//     durability: 10,
//     range: 1,
//   });

  const arm = new Arm({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });

  const bow = new Bow({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
  });

  const blade = new Blade({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
  });

  const knife = new Knife({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
  });

  const staff = new Staff({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
  });

  const longBow = new LongBow({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
  });
  
  const axe = new Axe({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: blade.range,
  });

  const stormStaff = new StormStaff({
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
  });


class StudentLog {
  constructor (name) {
    this.name = name;
    this.scores = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (typeof grade != Number) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n`;
    } else 
    if (grade > 5 & grade < 1) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n`;
    } else {    
    this.scores.subject.push(grade);
    }
  }

  getAverageBySubject(subject) {
    this.scores.push(subject);
    if (this.scores.subject.length === 0) {
      return 0;
    } else {
    let sum = 0;
    for (let score of this.scores.subject) {
      sum += score;
   }  return sum / this.scores.subject.length;}

  }

  getTotalAverage() {
    let averGrade = getAverageBySubject();
    if (this.scores.subject.length === 0) {
      return 0;
    } else {
    for (let i = 0; i < averGrade.length; i++) {
      let averSum = 0;
      averSum += averGrade[i];
    } return everSum / averGrade.length;}
  }
}




