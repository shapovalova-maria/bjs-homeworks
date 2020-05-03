'use strict';
function getResult(a,b,c){
    
    let x = [];
    let d;

    d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        x.push((- b + Math.sqrt(d)) / (2 * a));
        x.push((- b - Math.sqrt(d)) / (2 * a));
    } else if (d == 0) {
        x.push(-b / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMarks;

if (marks.length == 0) { 
    return 0;
} else {
    if (marks.length > 5) {
    console.log("Количество оценок больше 5!");
    } 
    marks = marks.slice(0,5);
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    } averageMarks = sum / marks.length;
  }
    return averageMarks;
}

function askDrink(name, dateOfBirthday){
    let result;

    let dayToday = new Date().getDate();
    let monthToday = new Date().getMonth() + 1;
    let yearToday = new Date().getFullYear();

    let dayOfBorn = dateOfBirthday.getDate(); 
    let monthOfBorn = dateOfBirthday.getMonth() + 1;
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