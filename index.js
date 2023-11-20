const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const toDayDate = new Date();
// console.log(toDayDate);

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonth = [
  "January",
  "February",
  "March",
  "Aprill",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = (toDayDate.getDate < 10 ? "0" : "") + toDayDate.getDate();
day.innerHTML = weekday[toDayDate.getDay()];
month.innerHTML = allMonth[toDayDate.getMonth()];
year.innerHTML = toDayDate.getFullYear();
