var todayDate = moment().format('dddd, MMM Do, YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings("textarea").val()
    var hour = $(this).siblings("textarea").attr("id")
    localStorage.setItem(hour,userInput)
})

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

function hourUpdater() {
    var presentTime = moment().hours();
    $('.time-block').each(function () {
      var hourTime = parseInt($(this).attr('id').split('-')[1]);
      if (hourTime < presentTime) {
        $(this).addClass('past');
      } else if (hourTime === presentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  hourUpdater();