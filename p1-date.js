/*
    CIT 281 Project 1
    Name: Adam Newman
*/
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDay = prompt("Current day of week:");
while (!daysOfWeek.includes(currentDay)) {
  currentDay = prompt("Invalid day. Enter day of week:");
}
console.log(daysLeft);
