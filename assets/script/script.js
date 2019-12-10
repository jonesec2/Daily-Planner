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
                        <div class='input-group-append' data-time=${wordArray[i]}> <button class='button' id= ${timeButtonArray[i]}  >Save Plans <i class='fa fa-save'></i></button></div>
                    </div>
                    `)
    $(".container").append(timeDiv)

}

///////////////////////////////////////////////////////////////////////////////////////////////
// create local storage .on("click"
// each hour needs it's own local storage

//?

//hard coded section
///////////////////////////////////////////////////////////////
var buttonPress = $(".button").on("click", function () {

    var formText = document.getElementById('nine').value;
    localStorage.setItem("Task buttonOne", formText)
    console.log(formText)
})
//set local storage equal to form value
$('#nine').val(localStorage.getItem("Task buttonOne"));
$('#ten').val(localStorage.getItem("Task buttonTwo"));
$('#eleven').val(localStorage.getItem("Task buttonThree"));
$('#twelve').val(localStorage.getItem("Task buttonFour"));
$('#one').val(localStorage.getItem("Task buttonFive"));
$('#two').val(localStorage.getItem("Task buttonSix"));
$('#three').val(localStorage.getItem("Task buttonSeven"));
$('#four').val(localStorage.getItem("Task buttonEight"));
$('#five').val(localStorage.getItem("Task buttonNine"));
///////////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////////////////////////////////////////////
// finds hour by div
// needs to be updated to be more dynamic
var timeForm10 = $("#ten").text();
console.log(timeForm10.substring(0, 2));


console.log($('span #id').text())
// current function styles all divs at once.
// need to figure out how to parse each div as an individual, and update individually depending on current time
function checkPastHour() {
    if (moment().format('LT') > timeForm10.charAt(0)) {
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
