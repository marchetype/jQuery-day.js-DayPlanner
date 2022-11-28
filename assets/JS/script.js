let currentDayEl = $('#currentDay');
let hourNineEl = $('#hour-9');
let hourTenEl = $('#hour-10');
let hourElevenEl = $('#hour-11');
let hourTwelveEl = $('#hour-12');
let hourOneEl = $('#hour-1');
let hourTwoEl = $('#hour-2');
let hourThreeEl = $('#hour-3');
let hourFourEl = $('#hour-4');
let hourFiveEl = $('#hour-5');
let workHourArr = [hourNineEl, hourTenEl, hourElevenEl, hourTwelveEl, hourOneEl, hourTwoEl, hourThreeEl,hourFourEl,hourFiveEl]
let currentHour = dayjs().format('h:00')
//console.log(currentHour)


$(function () {
  // Code below will cause any data entered into a textarea to be saved to localStorage. Using $(this), one function can 
  //be created for all time-blocks to use instead of individual functions for each hour.
    $('.saveBtn').on('click', function (event){
      event.preventDefault();
      // console.log($(this).parent().children());
      // console.log($(this).parent().children('textarea').val());
      // console.log($(this).parent('div'))
      localStorage.setItem ($(this).parent('div').data('hour') + ' todo', $(this).parent().children("textarea").val());
    })
  //
  // Code below will compare the time in the div to the current time, 
  // established in a variable at the top of the page.
    $('.time-block').each(function () {
      // console.log($(this)[0].dataset.hour);
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

  // The code below is used to render information from localStorage. conditionals added for 9:00 and indexes of 6, 7, 8.
    for (let i = 1; i < 13; i++) {
      if (i === 9) {
        let parentDiv = $('#hour-'+[i]);
        let textBox = parentDiv[0].children[1];
        let divToDo = localStorage.getItem ('09:00 todo')
        textBox.textContent = divToDo;
      } else if (i !== 6 && i !== 7 && i !== 8) {
        let parentDiv = $('#hour-'+[i]);
        let textBox = parentDiv[0].children[1];
        let divToDo = localStorage.getItem ([i]+':00 todo')
        textBox.textContent = divToDo;
        
      }
      
    }

      
    
  // TODO: Add code to display the current date in the header of the page.
  $(currentDayEl).text(dayjs().format('DD MMMM, YYYY'));
})
