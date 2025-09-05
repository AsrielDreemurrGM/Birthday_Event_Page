AOS.init();

const birthDay = 28;
// Hello!
// Since you're lurking, here's a curiosity:
// My Birthday month is September (9), but because JS has months 0-indexed, as in, January is 0,
// September is 8, not 9
const birthMonth = 8;
const birthYear = 2005;

function getNextBirthday() {
    const today = new Date();
    let year = today.getFullYear();

    if (today.getMonth() > birthMonth || (today.getMonth() === birthMonth && today.getDate() > birthDay)) {
        year += 1;
    }

    return new Date(year, birthMonth, birthDay, 0, 0, 0);
}

function getCurrentAge() {
    const today = new Date();
    let age = today.getFullYear() - birthYear;

    if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
        age -= 1;
    }

    return age;
}

function getOrdinalSuffix(age) {
    if (age % 100 >= 11 && age % 100 <= 13) {
        return 'th';
    }
    switch (age % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function formatUnit(value, singular, plural) {
    return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
}

const calcDate = setInterval(function () {
    const today = new Date();
    const nextBirthday = getNextBirthday();

    const timeUntilBirthday = nextBirthday - today;

    const minutesCalc = 1000 * 60;
    const hoursCalc = 1000 * 60 * 60;
    const daysCalc = 1000 * 60 * 60 * 24;

    const days = Math.floor(timeUntilBirthday / daysCalc);
    const hours = Math.floor((timeUntilBirthday % daysCalc) / hoursCalc);
    const minutes = Math.floor((timeUntilBirthday % hoursCalc) / minutesCalc);
    const seconds = Math.floor((timeUntilBirthday % minutesCalc) / 1000);

    const age = getCurrentAge() + 1;
    const ordinal = getOrdinalSuffix(age);

let countdownText = '';
if (days > 0) countdownText += formatUnit(days, 'day', 'days') + ' ';
if (hours > 0 || days > 0) countdownText += formatUnit(hours, 'hour', 'hours') + ' ';
if (minutes > 0 || hours > 0 || days > 0) countdownText += formatUnit(minutes, 'minute', 'minutes') + ' and ';
countdownText += formatUnit(seconds, 'second', 'seconds');

    document.getElementById('timer').innerHTML = `<br>${countdownText}<br>until my ${age}${ordinal} birthday!`;
}, 1000);
