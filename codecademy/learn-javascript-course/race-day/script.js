let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = true;
let runnerAge = 18;

if ((runnerAge > 18) && (isRegisteredEarly === true)) {
  raceNumber = raceNumber + 1000;
}

if ((runnerAge > 18) && (isRegisteredEarly === true)) {
  console.log(`${raceNumber} - you will race at 9:30 am.`);
} else if ((runnerAge > 18) && (isRegisteredEarly === false)) {
  console.log(`${raceNumber} - you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} - you will race at 12:30 pm.`);
} else if (runnerAge === 18) {
  console.log("Please see the registration desk");
}
