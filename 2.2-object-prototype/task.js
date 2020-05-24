function getAnimalSound(animal) {
    
    if (animal == undefined) {
        return null;
    } 

    const sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }
   const roundedAverage = Math.round(average / marks.length);
    return roundedAverage || 0;
}

function checkBirthday(birthday) {
   
    const now = +(new Date());
    birthday = +(new Date(birthday));
   
    const diff = now - birthday;

    const age = diff * 2 / (31536000000 + 31622400000);

    return age >= 18;

}