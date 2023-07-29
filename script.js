var Mainimg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function() {
    Mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    Mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    Mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    Mainimg.src = smallimg[3].src;
}

/*Countdown Promotion page */

const count = () => {
     countDate = new date('August 25, 2023 00:00:00').gettime()
    const now = new Date().gettime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = math.floor(gap / day);
    const textHour = math.floor((gap % day) / hour);
    const textMinute = math.floor((gap % hour) / minute);
    const textSecond = math.floor((gap % minute) / second);
document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;

};
