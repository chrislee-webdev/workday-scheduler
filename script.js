//current day
// moment().format("MMM Do YYYY");
let momentDate = moment().format('MMM Do yyyy');
let currentDay = document.getElementById("currentDay");

currentDay.innerHTML = momentDate;

$(".activity").sortable({

})