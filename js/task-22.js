const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
yesterday,
today,
tomorrow,
icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures




// Change code above this line
console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(icon);
const meanTemperature = (yesterday + today + tomorrow) / 3;