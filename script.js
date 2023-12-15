const saveBtn = $(".saveBtn");
const textArea = $(".description");
const timeBlock = $(".time-block");

// Day display
function displayCurrentDay() {
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDay();

// Timeblock display color
var currentHour = dayjs().hour();
console.log(currentHour);

function colorCodeTimeblocks() {
  timeBlock.each(function () {
    const timeBlockHour = parseInt($(this).attr("id"));
    console.log(timeBlockHour);
    if (timeBlockHour == currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (timeBlockHour > currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (timeBlockHour < currentHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
}

colorCodeTimeblocks();

// Save button
saveBtn.on("click", function () {
  alert("saved");
  const time = $(this).parent().attr("id");
  const value = $(this).siblings(".description").val();
  localStorage.setItem(time, value);
});
for (let index = 9; index < 18; index++) {
  $("#" + index + " .description").val(localStorage.getItem(index));
}
