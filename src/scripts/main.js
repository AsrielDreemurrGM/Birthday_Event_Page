AOS.init();

const birthdayDate = new Date("Sep 28, 2025 00:00:00");
const timeStamp = birthdayDate.getTime();

const calcDate = setInterval(function() {
    const today = new Date();
    const todayTimeStamp = today.getTime();
    
    const timeUntilBirthday = birthdayDate - todayTimeStamp;

    const minutesCalc = 1000 * 60;
    const hoursCalc = 1000 * 60 * 60;
    const daysCalc = 1000 * 60 * 60 * 24;

    const hoursUntilBirthday = Math.floor((timeUntilBirthday % daysCalc) / (hoursCalc));
    const minutesUntilBirthday = Math.floor((timeUntilBirthday % hoursCalc) / (minutesCalc));
    const secondsUntilBirthday = Math.floor((timeUntilBirthday % minutesCalc) / 1000);

    document.getElementById('timer').innerHTML = `<br>${hoursUntilBirthday} hours ${minutesUntilBirthday} minutes and ${secondsUntilBirthday} seconds`;

    if(timeUntilBirthday < 0) {
        clearInterval(calcDate);
        document.getElementById('timer').innerHTML = `<br>My 20 years birthday already passed.`;
    }
}, 1000)