'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let bodyCredit;
    let paidMonth;
    let totalMonth;
    let yearOfCredit = date.getFullYear();
    let yearToday = new Date().getFullYear();
    let percentOfCredit;
    let credit;

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
  
    if (typeof percent !== 'number') {
        totalAmount = `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (typeof contribution !== 'number') {
        totalAmount = `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (typeof amount !== 'number') {
        totalAmount = `Параметр сумма кредита содержит неправильное значение ${amount}`;
     } else {
        bodyCredit = amount - contribution;
        percentOfCredit = (percent / 12) / 100;
        totalMonth = (yearOfCredit - yearToday) * 12;
        paidMonth = bodyCredit * (percentOfCredit + (percentOfCredit / (Math.pow((1 + percentOfCredit), totalMonth) - 1)));
        totalAmount = totalMonth * paidMonth;

        // totalAmount = Math.round(totalAmount, -2);
       
     }
    
     return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}