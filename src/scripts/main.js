AOS.init();

const birthdayDate = new Date("Sep 28, 2024 12:00:00");
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

    document.getElementById('timer').innerHTML = `<br>${hoursUntilBirthday} horas ${minutesUntilBirthday} minutos e ${secondsUntilBirthday} segundos`;

    if(timeUntilBirthday < 0) {
        clearInterval(calcDate);
        document.getElementById('timer').innerHTML = `<br>Meu aniversário já passou.`;
    }
}, 1000)