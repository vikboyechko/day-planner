// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today = dayjs();


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  var scheduleEl = $('#schedule');
  thisRowSave = scheduleEl.children().children().eq(0).children().eq(2);
  thisRowSave.on('click', function() {
    thisRowSave.hide(); 
  })


  // Compare current hour to the planner hour row and assign classes

  // var thisHour = today.format('H'); // get hour in 24-hour format
  var thisHour = '11'; // for testing

  var hourElements = document.querySelectorAll('[id^="hour-"]'); // find all div id's that start with 'hour-'

  for (var i = 0; i < hourElements.length; i++) {
    var currentElement = hourElements[i]; // the current hour row ID element, e.g. hour-9
    var currentRowHour = currentElement.id.split('-'); // split off 'hour' and '9'
    var currentRowHourNumber = parseInt(currentRowHour[1]); // create var for '9'

    if (currentRowHourNumber >= 1 && currentRowHourNumber <= 5) {
      currentRowHourNumber += 12; 
    }; // convert hours 1-5 to 24-hour clock

    // Set the class based on if past, present, or future
    if (currentRowHourNumber < thisHour) {
      $(currentElement).addClass('past');
    }
    if (currentRowHourNumber == thisHour) {
      $(currentElement).addClass('present');
    }
    if (currentRowHourNumber > thisHour) {
      $(currentElement).addClass('future');
    }

  }

  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(today.format('dddd, MMMM D'))
});
