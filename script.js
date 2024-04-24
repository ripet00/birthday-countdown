const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const sisawaktu = document.querySelector(".sisawaktu");
const formatTime = document.querySelectorAll(".format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(2024, 11, 15, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const futureTime = futureDate.getTime();
function getRemainingTime() {
    const today = new Date().getTime();
    const remain = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = remain / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((remain % oneDay) / oneHour);
    let minutes = Math.floor((remain % oneHour) / oneMinute);
    let seconds = Math.floor((remain % oneMinute) / 1000);

    // Set Value array
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if ( item <10) {
            return (item = `0${item}`);
        }
        return item;
    }

    formatTime.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if(remain<0) {
        clearInterval(countdown);
        formatTime.innerHTML = `<h4 class="expired">sorry, this birthday has expired</h4>`;
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

// set initial values
getRemainingTime();