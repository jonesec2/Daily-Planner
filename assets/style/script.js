// sets the date at the top
var dateTime = null,
    date = null;
// var hour = null;

var update = function () {
    date = moment(new Date())
    dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    console.log(date._d)
};

$(document).ready(function () {
    dateTime = $('#timer')
    update();
    setInterval(update, 1000);
});

var timerId = null
var hours = null
timeNow = new Date();
hours = timeNow.getHours();
if (hours > 12) {
    hours -= 12;
}
else if (hours === 0) {
    hours = 12;
} else {
    hours = hours
}
console.log(hours.toString())




function showTime() {
    timerId = setInterval(function () {
        var timeNow = new Date();
        hours = timeNow.getHours();
        if (hours > 12) {
            hours -= 12;
        }
        else if (hours === 0) {
            hours = 12;
        } else {
            hours = hours
        }
        console.log(hours.toString());
    }, 3000)
}
showTime();

var int = parseFloat(timeForm9)
var timeForm9 = $("#9").text();
var int = parseFloat(timeForm9)
console.log(timeForm9.charAt(0));

var timeForm10 = $("#ten").text();
console.log(timeForm10.substring(0, 2));
var timeForm11 = $("#eleven").text();
console.log(timeForm11.substring(0, 2));
var timeForm12 = $("#twelve").text();
console.log(timeForm12.substring(0, 2));
var timeForm1 = $("#1").text();
console.log(timeForm1.charAt(0));
var timeForm2 = $("#2").text();
console.log(timeForm2.charAt(0));
var timeForm3 = $("#3").text();
console.log(timeForm3.charAt(0));
var timeForm4 = $("#4").text();
console.log(timeForm4.charAt(0));
var timeForm5 = $("#5").text();
console.log(timeForm5.charAt(0));

timeForm = $(".input-group-text").text();
console.log(timeForm.substring(0,2))


console.log(hours)

// $(".form-control").css('background-color', 'grey')
// styles the hour divs

// $(".hour").delegate(".form-control", getHours())

function checkHour() {
    if (hours.toString() > timeForm5.charAt(0)) {
        $(".form-control").css('background-color', 'grey')
    }
    else if (hours.toString() === timeForm3.charAt(0)) {
        $(".form-control").css('background-color', 'red')
    }
    else {
        $(".form-control").css('background-color', 'green')
    }
}

checkHour();
// setInterval ("refreshDiv();",3000)
// function refreshDiv(){
// $('.form-control').load('index.html .form-control')
// }

// else if (showTime(hours) = timeForm3.charAt(0)) {
//     $(".input-group-text").css('background-color', 'green')
// }

// if (*value* > current time hour) {
//     style grey
// }
// if else (*value* = current time hour) {
//     style red
// }
// else  {
//     style green
// }

// if (style === grey) {
//     "not able to edit hour"
// }
// else {

// };


//////////////////////////////////////////////////////////////////////////////////////
// append save button
$(".input-group-append").append("<button >Save Plans <i class='fa fa-save'></i></button>")