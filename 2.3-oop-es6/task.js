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
    } else if (this.durability <= this.initialDurability * 0.3) {
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
  constructor() {
    super({
    name: "Лук",
    attack: 10,
    durability: 200,
    range: 3
  });
}
}

class Arm extends Weapon {
  constructor() {
    super({
      name: "Рука",
      attack: 1, 
      durability: Infinity,
      range: 1
    });
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: "Меч",
      attack: 25,
      durability: 500,
      range: 1
    });
  }
}

class Knife extends Weapon {
  constructor() {
    super({
      name: "Нож",
      attack: 5,
      durability: 300,
      range: 1
    });
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: "Посох",
      attack: 8,
      durability: 300,
      range: 2
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук',
    this.attack = 15,
    this.range = 4
  };
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира',
    this.attack = 27,
    this.durability = 800
  };
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури',
    this.attack = 10,
    this.range = 3
  };
}

   const arm = new Arm();

   const bow = new Bow();

   const blade = new Sword();

   const knife = new Knife();

   const staff = new Staff();

   const longBow = new LongBow();
  
   const axe = new Axe();

   const stormStaff = new StormStaff();


class StudentLog {
  constructor (name) {
    this.name = name;
    this.scores = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (Number.isInteger(grade)) {
      if (grade <= 5 && grade >= 1) {
        const found = this.scores.find(x => x.subjectName === subject);
        if (found) {
          found.grades.push(grade);    //<--------------
        } else {
        this.scores.push(
          {subjectName: subject,
          grades: [grade]}
        );}
        return this.scores;
      } 
    } else {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n`;  
    } 
  }

  getAverageBySubject(subject) {
    let sum = 0;
    const found = this.scores.find(x => x.subjectName === subject);
    if (found) {
      for (let i = 0; i < found.grades.length; i++) {
          sum += found.grades[i]; 
        } sum = sum / found.grades.length;
     } 
     return sum;
  
    
  }

  getTotalAverage() {
     let averSum = 0;
     const averageGrades = [];
     for (let score of this.scores) {
       averageGrades.push(this.getAverageBySubject(score.subjectName));
     }
     for (let i = 0; i < averageGrades.length; i++) {
      averSum = averSum + averageGrades[i];
    }
      return averSum / averageGrades.length;
    } 
  }
