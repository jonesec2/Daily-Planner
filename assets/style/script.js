// sets the date at the top
var dateTime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));

};

// updates every second
$(document).ready(function () {
    dateTime = $('#timer')
    update();
    setInterval(update, 1000);
});

//////////////////////////////////////////////////////////////////////////////////////////
// creates time divs
var timeArray = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
var wordArray = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
var timeDivTime = null

for (var i = 0; i < timeArray.length; i++) {
    var timeDiv = $("<div>").addClass("row")

    timeDiv.html(`
                    <div class= 'input-group mb-1 hour'>
                        <div class='input-group-prepend'><span id= ${wordArray[i]} class='pr-4 input-group-text'>${timeArray[i]}</span></div>
                        <input type='text' class='form-control' aria-label='hour'>    
                        <div class='input-group-append' data-time=${wordArray[i]}></div>
                    </div>
                    `)
    $(".container").append(timeDiv)

}

//appends save icon
$(".input-group-append").append("<button >Save Plans <i class='fa fa-save'></i></button>")

// create local storage .on("click"
var saveButton = $(".fa fa-save").on("click", function () {
    var localForm = $('.form-control').text()
    localStorage.setItem("Task", localForm)
    console.log(checkHour)
})


// each hour needs it's own local storage
// use logic to identify each hour div individually


//////////////////////////////////////////////////////////////////////////////////////////
// sets the current hour as a string
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
var checkHour = hours.toString()
console.log(checkHour);

// checks the current hour as a string every three seconds
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
        var checkHour = hours.toString()
        console.log(checkHour);
    }, 3000)
}
showTime();


// finds hour by div
// needs to be updated to be more dynamic

var timeForm10 = $("#ten").text();
console.log(timeForm10.substring(0, 2));


// var divHours = 
var timeForm = $(".input-group-text").text();
// var differentHours = $.parseJSON(timeForm);
var differentHours = $.makeArray(timeForm);



// $(".form-control").css('background-color', 'grey')
// styles the hour divs

// $(".hour").delegate(".form-control", getHours())


// current function styles all divs at once.
// need to figure out how to parse each div as an individual, and update individually depending on current time
function checkPastHour() {
    if (checkHour > timeForm10.charAt(0)) {
        $(".form-control").css('background-color', 'grey')
    }
    if (checkHour === timeForm10.charAt(0)) {
        $(".form-control").css('background-color', 'red')
    }
    if (checkHour < timeForm10.charAt(0)) {
        $(".form-control").css('background-color', 'green')
    }
}
checkPastHour();

function checkCurrentHour() {
    if (hours.toString() > timeForm5.charAt(0)) {
        $(".form-control").css('background-color', 'grey')
    }
    else if (hours.toString() === timeForm4.charAt(0)) {
        $(".form-control").css('background-color', 'red')
    }
    else {
        $(".form-control").css('background-color', 'green')
    }
}


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


