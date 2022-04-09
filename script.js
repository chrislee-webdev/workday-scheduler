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
//variables to hold button element
var saveBtn = document.getElementById("saveBtn");
var saveBtn10 = document.getElementById("saveBtn-10")
var saveBtn11 = document.getElementById("saveBtn-11")
var saveBtn12 = document.getElementById("saveBtn-12")
var saveBtn13 = document.getElementById("saveBtn-13")
var saveBtn14 = document.getElementById("saveBtn-14")
var saveBtn15 = document.getElementById("saveBtn-15")
var saveBtn16 = document.getElementById("saveBtn-16")
var saveBtn17 = document.getElementById("saveBtn-17")

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
} else if (currentHour < 12){
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
    $('#16').addClass("future")
} else if (currentHour == 16) {
    $('#16').addClass("present")
}
//5PM
if (currentHour > 17) {
    $('#17').addClass("past")
} else if (currentHour < 17){
    $('#17').addClass("future")
} else if (currentHour == 17) {
    $('#17').addClass("present")
}

//Hour 9 function
$('#saveBtn-9').click(function(){
    var textValue = document.getElementById("description-9").value;
    //set local storge
    localStorage.setItem("key9", textValue)
})
//Hour 10 function
$('#saveBtn-10').click(function(){
    var textValue = document.getElementById("description-10").value;
    //set local storge
    localStorage.setItem("key10", textValue)
})
//Hour 11 function
$('#saveBtn-11').click(function(){
    var textValue = document.getElementById("description-11").value;
    //set local storge
    localStorage.setItem("key11", textValue)
})
//Hour 12 function
$('#saveBtn-12').click(function(){
    var textValue = document.getElementById("description-12").value;
    //set local storge
    localStorage.setItem("key12", textValue)
})
//Hour 13 function
$('#saveBtn-13').click(function(){
    var textValue = document.getElementById("description-13").value;
    //set local storge
    localStorage.setItem("key13", textValue)
})
//Hour 14 function
$('#saveBtn-14').click(function(){
    var textValue = document.getElementById("description-14").value;
    //set local storge
    localStorage.setItem("key14", textValue)
})
//Hour 15 function
$('#saveBtn-15').click(function(){
    var textValue = document.getElementById("description-15").value;
    //set local storge
    localStorage.setItem("key15", textValue)
})
//Hour 16 function
$('#saveBtn-16').click(function(){
    var textValue = document.getElementById("description-16").value;
    //set local storge
    localStorage.setItem("key16", textValue)
})
//Hour 17 function
$('#saveBtn-17').click(function(){
    var textValue = document.getElementById("description-17").value;
    //set local storge
    localStorage.setItem("key17", textValue)
})


    //get local storage
    document.getElementById("description-9").innerHTML = localStorage.getItem("key9");
    document.getElementById("description-10").innerHTML = localStorage.getItem("key10");
    document.getElementById("description-11").innerHTML = localStorage.getItem("key11");
    document.getElementById("description-12").innerHTML = localStorage.getItem("key12");
    document.getElementById("description-13").innerHTML = localStorage.getItem("key13");
    document.getElementById("description-14").innerHTML = localStorage.getItem("key14");
    document.getElementById("description-15").innerHTML = localStorage.getItem("key15");
    document.getElementById("description-16").innerHTML = localStorage.getItem("key16");
    document.getElementById("description-17").innerHTML = localStorage.getItem("key17");

$('#clear').click(function(){
    localStorage.clear();
    document.getElementById("description-9").innerHTML = "";
    document.getElementById("description-10").innerHTML = "";
    document.getElementById("description-11").innerHTML = "";
    document.getElementById("description-12").innerHTML = "";
    document.getElementById("description-13").innerHTML = "";
    document.getElementById("description-14").innerHTML = "";
    document.getElementById("description-15").innerHTML = "";
    document.getElementById("description-16").innerHTML = "";
    document.getElementById("description-17").innerHTML = "";
})