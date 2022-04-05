// moment().format("MMM Do YYYY");
let momentDate = moment().format('MMM Do yyyy');
let currentDay = document.getElementById("currentDay");
// current date display on page
currentDay.innerHTML = momentDate;
//current time
var currentHour = moment().hours();
// array of times
var scheduleTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]
// variable to hold row as a variable
var row = document.getElementsByClassName("row");

console.log(row);
console.log(currentHour);
//9AM
if (currentHour > 9) {
    $('#9').addClass("past")
} else if (currentHour < 9){
    $('#9').addClass("future")
} else if (currentHour == 9) {
    $('#9').addClass("present")
}
//10AM  
if (currentHour > 10) {
    $('#10').addClass("past")
} else if (currentHour < 10){
    $('#10').addClass("future")
} else if (currentHour == 10) {
    $('#10').addClass("present")
}
//11AM
if (currentHour > 11) {
    $('#11').addClass("past")
} else if (currentHour < 11){
    $('#11').addClass("future")
} else if (currentHour == 11) {
    $('#11').addClass("present")
}
//12PM
if (currentHour > 12) {
    $('#12').addClass("past")
} else if (currentHour > 12){
    $('#12').addClass("future")
} else if (currentHour == 12) {
    $('#12').addClass("present")
}
//1PM
if (currentHour > 13) {
    $('#13').addClass("past")
} else if (currentHour < 13){
    $('#13').addClass("future")
} else if (currentHour == 13) {
    $('#13').addClass("present")
}
//2PM
if (currentHour > 14) {
    $('#14').addClass("past")
} else if (currentHour < 14){
    $('#14').addClass("future")
} else if (currentHour == 14) {
    $('#14').addClass("present")
}
//3PM
if (currentHour > 15) {
    $('#15').addClass("past")
} else if (currentHour < 15){
    $('#15').addClass("future")
} else if (currentHour == 15) {
    $('#15').addClass("present")
}
//4PM
if (currentHour > 16) {
    $('#16').addClass("past")
} else if (currentHour < 16){
    $('$16').addClass("future")
} else if (currentHour == 16) {
    $('16').addClass("present")
}
//5PM
if (currentHour > 17) {
    $('#17').addClass("past")
} else if (currentHour > 17){
    $('$17').addClass("future")
} else if (currentHour == 17) {
    $('#17').addClass("present")
}
//save button
$('.saveBtn').addEventListener("click", function(){
    
})