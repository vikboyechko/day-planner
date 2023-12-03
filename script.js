$(function () {

  var today = dayjs(); // load dayjs data for today
  $('#currentDay').text(today.format('dddd, MMMM D')); // show the current day on the page
  var scheduleEl = $('#schedule'); // the schedule area of the page, which I added to the HTML

  
  // SET AND GET FROM LOCAL STORAGE //

  // Save button click event //
  scheduleEl.on('click', '.saveBtn', function() {
    var currentRow = $(this).closest('.time-block'); // access the time block row based on where the save button is pressed
    var blockId = currentRow.attr('id'); // i'm using the time block ID as the local storage key
    var thisRowText = currentRow.find('.description').val(); // get the text from the text area, based on class 'description'
    localStorage.setItem(blockId, thisRowText); // save to local storage in the format 'hour-xx : text'
  });

  // Now retrieve the text data from local storage, using jquery .each to iterate, way better than for loops for this
  $('.time-block').each(function() {
    var blockId = $(this).attr('id'); // for each time block, get the current hour-xx and set as the blockId
    var savedText = localStorage.getItem(blockId); // first get any local storage
    if (savedText !== null) {
      $(this).find('.description').val(savedText); // if there's nothing saved, 
    }
  })

  // COMPARE HOUR OF ROW TO CURRENT HOUR, SET COLORS //

  var thisHour = today.format('H'); // get hour in 24-hour format
  // var thisHour = '11'; // used for testing as I coded after 5pm

  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var currentRowHour = blockId.split('-'); // split off 'hour' and '9', for example
    var currentRowHourNumber = parseInt(currentRowHour[1]); // create var for '9', for example

    if (currentRowHourNumber >= 1 && currentRowHourNumber <= 5) {
      currentRowHourNumber += 12; 
    }; // convert hours 1-5 to 24-hour clock

    // Set the class based on if past, present, or future
    if (currentRowHourNumber < thisHour) {
      $(this).addClass('past');
    }
    if (currentRowHourNumber == thisHour) {
      $(this).addClass('present');
    }
    if (currentRowHourNumber > thisHour) {
      $(this).addClass('future');
    }

  });
   
});
