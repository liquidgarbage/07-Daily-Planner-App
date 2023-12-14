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
// want it to color code past present and future, comparing current time to the time blocks

var currentHour = dayjs().format("H");
console.log(currentHour);

function colorCodeTimeblocks() {
  for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].dataset.time == currentHour) {
      timeBlock[i].classList.remove("past");
      timeBlock[i].classList.remove("future");
      timeBlock[i].classList.add("present");
    } else if (timeBlock[i].dataset.time > currentHour) {
      timeBlock[i].classList.remove("past");
      timeBlock[i].classList.remove("present");
      timeBlock[i].classList.add("future");
    } else if (timeBlock[i].dataset.time < currentHour) {
      timeBlock[i].classList.remove("present");
      timeBlock[i].classList.remove("future");
      timeBlock[i].classList.add("past");
    }
  }
}

colorCodeTimeblocks();

// Save button
saveBtn.on("click", function () {
  console.log("clicked");

  localStorage.setItem;
});
