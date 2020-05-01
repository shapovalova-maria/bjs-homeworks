function getResult(a,b,c){
    'use strict';
    let x = [];
    let d;

    d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        x.push((- b + Math.sqrt(d)) / (2 * a));
        x.push((- b - Math.sqrt(d)) / (2 * a));
        return x;      
    } else if (d == 0) {
        x.push(-b / (2 * a));
        return x;
    } else {
        return x;
    }
}

function getAverageMark(marks){
    let sum = 0;
    let averageMarks;

if (marks.length == 0) { 
    averageMarks = sum;
    return averageMarks;
} else {
    if (marks.length > 5) {
    console.log("Количество оценок больше 5!");
    } 
    marks = marks.slice(0,5);
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMarks = sum / marks.length;
    }
  }
    return averageMarks;
}

function askDrink(name, dateOfBirthday){
    let result;

    let dayToday = new Date().getDate();
    let monthToday = new Date().getMonth();
    let yearToday = new Date().getFullYear();

    let dayOfBorn = dateOfBirthday.getDate(); 
    let monthOfBorn = dateOfBirthday.getMonth();
    let yearOfBorn = dateOfBirthday.getFullYear();
    
    if ((yearToday - yearOfBorn) > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    } else if ((yearToday - yearOfBorn) == 18) {
        if (monthOfBorn > monthToday) {
            result = `Не желаете ли олд-фэшн, ${name}?`;
            return result;
        } else if (monthToday == monthOfBorn) {
            if (dayOfBorn >= dayToday) {
            result = `Не желаете ли олд-фэшн, ${name}?`;
            return result;
            }
        }
    }
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}