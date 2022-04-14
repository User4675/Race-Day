let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let isRegistered = true;

let runnerAge = "18";

if (runnerAge > 18 && isRegistered === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race will begin at 9:30am with the race number ` + raceNumber);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log("Your race will begin at 11:00am with the race number " + raceNumber);
} else if (runnerAge < 18) {
    console.log("Your race will begin at 12:30pm with the race number " + raceNumber);
} else if (runnerAge = 18) {
  console.log("Please go to the registration desk!")
}
