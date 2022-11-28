let currentDayEl = $('#currentDay');
let hourNineEl = $('#9AM');
let hourTenEl = $('#10AM');
let hourElevenEl = $('#11AM');
let hourTwelveEl = $('#12PM');
let hourOneEl = $('#1PM');
let hourTwoEl = $('#2PM');
let hourThreeEl = $('#3PM');
let hourFourEl = $('#4PM');
let hourFiveEl = $('#5PM');
let workHourArr = [hourNineEl, hourTenEl, hourElevenEl, hourTwelveEl, hourOneEl, hourTwoEl, hourThreeEl,hourFourEl,hourFiveEl]
let currentHour = dayjs().format('h:00')
console.log(currentHour)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // code below will cause any data entered into a textarea to be saved to localStorage. Using $(this), one function can 
  //be created for all time-blocks to use instead of individual functions for each hour.
    $('.saveBtn').on('click', function (event){
      event.preventDefault();
      console.log($(this).parent().children());
      console.log($(this).parent().children('textarea').val());
      console.log($(this).parent('div'))
      localStorage.setItem ($(this).parent('div').data('hour') + ' todo', $(this).parent().children("textarea").val());
    })
  //
  // Code below will compare the time in the div to the current time, 
  // established in a variable at the top of the page.
    $('.time-block').each(function () {
      console.log($(this)[0].dataset.hour);
      if ($(this)[0].dataset.hour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else if ($(this)[0].dataset.hour < currentHour) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      } else if ($(this)[0].dataset.hour > currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      };
        
    })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    
  // TODO: Add code to display the current date in the header of the page.
  $(currentDayEl).text(dayjs().format('DD MMMM, YYYY'));
})
