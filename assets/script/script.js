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
var timeDivArray = ["hourOne", "hourTwo", "hourThree", "hourFour", "hourFive", "hourSix", "hourSeven", "hourEight", "hourNine"]
var timeButtonArray = ["buttonOne", "buttonTwo", "buttonThree", "buttonFour", "buttonFive", "buttonSix", "buttonSeven", "buttonEight", "buttonNine"]
var wordArray = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
var timeDivTime = null

for (var i = 0; i < timeArray.length; i++) {
    var timeDiv = $("<div>").addClass("row")

    timeDiv.html(`
                    <div class= 'input-group mb-1 hour'>
                        <div class='input-group-prepend'><span id= ${timeDivArray[i]} class='pr-4 input-group-text'>${timeArray[i]}</span></div>
                        <input id=${wordArray[i]} type='text' class='form-control' aria-label='hour'>    
                        <div class='input-group-append' data-time=${wordArray[i]}> <button class='button' id= ${timeButtonArray[i]} >Save Plans <i class='fa fa-save'></i></button></div>
                    </div>
                    `)
    $(".container").append(timeDiv)

}

///////////////////////////////////////////////////////////////////////////////////////////////
// create local storage .on("click"
// each hour needs it's own local storage

//sort of dynamic local storage
$(".button").on("click", function () {
    // figure out sibling syntax so when button is pressed the value of it's sibling is added to local
    localStorage.setItem("Task " + this.id, $('input').value)
    console.log(this.id)
})

//hard coded section
///////////////////////////////////////////////////////////////
var storageArray = []

var buttonPress = $(".button").on("click", function () {

    var formText = document.getElementById('nine').value;
    localStorage.setItem("Task buttonOne", formText)
    console.log(formText)
})
//set local storage equal to form value
// $('#nine').val(localStorage.getItem("Task buttonOne"));
// $('#ten').val(localStorage.getItem("Task buttonTwo"));
// $('#eleven').val(localStorage.getItem("Task buttonThree"));
// $('#twelve').val(localStorage.getItem("Task buttonFour"));
// $('#one').val(localStorage.getItem("Task buttonFive"));
// $('#two').val(localStorage.getItem("Task buttonSix"));
// $('#three').val(localStorage.getItem("Task buttonSeven"));
// $('#four').val(localStorage.getItem("Task buttonEight"));
// $('#five').val(localStorage.getItem("Task buttonNine"));
///////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// sets the current hour as a string
var timerId = null
var hours = null
timeNow = new Date();
hours = timeNow.getHours();

var checkHour = hours.toString()
// var checkHour = 14
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


////////////////////////////////////////////////////////////////////////////////////////////////////
// finds hour by div
// needs to be updated to be more dynamic


// current function styles all divs at once.
// need to figure out how to parse each div as an individual, and update individually depending on current time

//use for .each to syle these things


function checkNine() {
    if (checkHour > 9) {
        $("#nine").css('background-color', 'grey')
    }
    else if (checkHour == 9) {
        $("#nine").css('background-color', 'red')
    }
    else {
        $("#nine").css('background-color', 'green')
    }
}
checkNine();


function checkTen() {
    if (checkHour > 10) {
        $("#ten").css('background-color', 'grey')
    }
    else if (checkHour == 10) {
        $("#ten").css('background-color', 'red')
    }
    else {
        $("#ten").css('background-color', 'green')
    }
}
checkTen();

function checkEleven() {
    if (checkHour > 11) {
        $("#eleven").css('background-color', 'grey')
    }
    else if (checkHour == 11) {
        $("#eleven").css('background-color', 'red')
    }
    else {
        $("#eleven").css('background-color', 'green')
    }
}
checkEleven();
function checkTwelve() {
    if (checkHour > 12) {
        $("#twelve").css('background-color', 'grey')
    }
    else if (checkHour == 12) {
        $("#twelve").css('background-color', 'red')
    }
    else {
        $("#twelve").css('background-color', 'green')
    }
}
checkTwelve();
function checkOne() {
    if (checkHour > 13) {
        $("#one").css('background-color', 'grey')
    }
    else if (checkHour == 13) {
        $("#one").css('background-color', 'red')
    }
    else {
        $("#one").css('background-color', 'green')
    }
}
checkOne();
function checkTwo() {
    if (checkHour > 14) {
        $("#two").css('background-color', 'grey')
    }
    else if (checkHour == 14) {
        $("#two").css('background-color', 'red')
    }
    else {
        $("#two").css('background-color', 'green')
    }
}
checkTwo();

function checkThree() {
    if (checkHour > 15) {
        $("#three").css('background-color', 'grey')
    }
    else if (checkHour == 15) {
        $("#three").css('background-color', 'red')
    }
    else {
        $("#three").css('background-color', 'green')
    }
}
checkThree();

function checkFour() {
    if (checkHour > 16) {
        $("#four").css('background-color', 'grey')
    }
    else if (checkHour == 16) {
        $("#four").css('background-color', 'red')
    }
    else {
        $("#four").css('background-color', 'green')
    }
}
checkFour();

function checkFive() {
    if (checkHour > 17) {
        $("#five").css('background-color', 'grey')
    }
    else if (checkHour == 17) {
        $("#five").css('background-color', 'red')
    }
    else {
        $("#five").css('background-color', 'green')
    }
}
checkFive();



