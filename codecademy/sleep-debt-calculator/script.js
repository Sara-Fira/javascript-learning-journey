function getSleepHours(day) {
if (day === "Monday") {
  return 6;
} else if (day === "Tuesday") {
  return 10;
} else if (day === "Wednesday") {
  return 11;
} else if (day === "Thursday") {
  return 4;
} else if (day === "Friday") {
  return 4;
} else if (day === "Saturday") {
  return 8;
} else if (day === "Sunday") {
  return 10;
}
}

function getActualSleepHours() {
let firstDay = getSleepHours("Monday");
let secondDay = getSleepHours("Tuesday");
let thirdDay = getSleepHours("Wednesday");
let fourthDay = getSleepHours("Thursday");
let fifthDay = getSleepHours("Friday");
let sixthDay = getSleepHours("Saturday");
let seventhDay = getSleepHours("Sunday");
let sum = firstDay + secondDay + thirdDay + fourthDay + fifthDay + sixthDay + seventhDay;
return sum;
}

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let overHours = actualSleepHours - idealSleepHours;
  let underHours = idealSleepHours - actualSleepHours;

if (actualSleepHours === idealSleepHours) {
  console.log("You got perfect amount of sleep.");
} else if (actualSleepHours > idealSleepHours) {
  console.log(`You got more sleep than needed. You are ${overHours} hours over your ideal sleep.`);
} else if (actualSleepHours < idealSleepHours) {
  console.log(`You should get more rest. You are under ${underHours} hours your ideal sleep.`)
}
}
calculateSleepDebt()



