// sets the date at the top
// var NowMoment = moment().format('LTS');
// // setInterval(NowMoment, 1000);
// console.log(NowMoment)
// $(document).ready(function () {
//     timerId = setInterval(function () {
//         var eDisplayMoment = document.getElementById('timer');
//         eDisplayMoment.innerHTML = NowMoment;
//         setInterval(NowMoment, 1000);
//     })
// });


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
// sets the current hour as a string
var timerId = null
var hours = null
timeNow = new Date();
hours = timeNow.getHours();

//dynamically checks the hour
var checkHour = hours
//manually set hour for testing
// var checkHour = 14

// checks the current hour as a string every three seconds
function showTime() {
    timerId = setInterval(function () {
        var timeNow = new Date();
        hours = timeNow.getHours();
        var checkHour = hours
    })
}
showTime();

//////////////////////////////////////////////////////////////////////////////////////////
// creates time divs
var timeArray = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
var timeDivArray = ["hourOne", "hourTwo", "hourThree", "hourFour", "hourFive", "hourSix", "hourSeven", "hourEight", "hourNine"]
var timeButtonArray = ["buttonOne", "buttonTwo", "buttonThree", "buttonFour", "buttonFive", "buttonSix", "buttonSeven", "buttonEight", "buttonNine"]
var wordArray = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
var numberArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var timeDivTime = null

//for loop dynamically creating hour divs based on array
for (var i = 0; i < timeArray.length; i++) {
    var timeDiv = $("<div>").addClass("row")

    //creates entire div section to house the hour divs
    timeDiv.html(`
                    <div class= 'input-group mb-1 hour'>
                        <div class='input-group-prepend'><span id= ${timeDivArray[i]} class='pr-4 input-group-text'>${timeArray[i]}</span></div>
                        <input id=${wordArray[i]} type='text' data-number=${numberArray[i]} class='form-control' aria-label='hour'>    
                        <div class='input-group-append' data-time=${wordArray[i]}> <button class='button' id= ${timeButtonArray[i]} >Save   <i class='fa fa-save'></i></button></div>
                    </div>
                    `)
    $(".container").append(timeDiv)

}

///////////////////////////////////////////////////////////////////////////////////////////////

//sort of dynamic local storage
// $(".button").on("click", function () {
//     var formData = $('.form-control').each(function (index) {
//         $(this.id).val()
//         console.log($(this.id).val())
//     })
//     localStorage.setItem("Task " + this.id, formData);
//     console.log(this.id)
//     console.log(formData)
// })


//hard coded section
///////////////////////////////////////////////////////////////

var buttonNine = $("#buttonOne").on("click", function () {

    var formText = document.getElementById('nine').value;
    localStorage.setItem("Task buttonOne", formText)

})
var buttonTen = $("#buttonTwo").on("click", function () {

    var formText = document.getElementById('ten').value;
    localStorage.setItem("Task buttonTwo", formText)
    // console.log(formText)
})
var buttonEleven = $("#buttonThree").on("click", function () {

    var formText = document.getElementById('eleven').value;
    localStorage.setItem("Task buttonThree", formText)
    // console.log(formText)
})
var buttonTwelve = $("#buttonFour").on("click", function () {

    var formText = document.getElementById('twelve').value;
    localStorage.setItem("Task buttonFour", formText)
    // console.log(formText)
})
var buttonOne = $("#buttonFive").on("click", function () {

    var formText = document.getElementById('one').value;
    localStorage.setItem("Task buttonFive", formText)
    // console.log(formText)
})
var buttonTwo = $("#buttonSix").on("click", function () {

    var formText = document.getElementById('two').value;
    localStorage.setItem("Task buttonSix", formText)
    // console.log(formText)
})
var buttonThree = $("#buttonSeven").on("click", function () {

    var formText = document.getElementById('three').value;
    localStorage.setItem("Task buttonSeven", formText)
    // console.log(formText)
})
var buttonFour = $("#buttonEight").on("click", function () {

    var formText = document.getElementById('four').value;
    localStorage.setItem("Task buttonEight", formText)
    // console.log(formText)
})
var buttonFive = $("#buttonNine").on("click", function () {

    var formText = document.getElementById('five').value;
    localStorage.setItem("Task buttonNine", formText)
    // console.log(formText)
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

////////////////////////////////////////////////////////////////////////////////////////////////////
// finds hour by input id
// Updates each input individually based on .each()
$('.form-control').each(function () {
    var thisId = this.id
    console.log(thisId)

    if ($(this).data('number') < checkHour) {
        document.getElementById(thisId).style.background = "rgb(169, 169, 169)";
    }
    else if (checkHour == $(this).data('number')) {
        document.getElementById(thisId).style.background = "rgb(40, 130, 171)";
    }
    else {
        document.getElementById(thisId).style.background = "rgb(64, 192, 74)";
    }
    console.log($(this).data('number'))
    console.log(checkHour)

});
////////////////////////////////////////////////////////////////////////////////////////////////////////