
module.exports = function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm;

    ampm = hours > 12 ? (ampm = 'PM') : 'AM';

    hours = hours > 12 ? hours - 12 : hours;

    hours = hours < 10 ? `0${hours}` : hours;

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    time = `${hours}:${minutes}:${seconds} ${ampm}`;

    return time;
}