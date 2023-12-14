const saveBtn = $(".saveBtn");
const textArea = $(".description");
const timeBlock = $(".time-block");
const blockHour = [
  "#9",
  "#10",
  "#11",
  "#12",
  "#13",
  "#14",
  "#15",
  "#16",
  "#17",
];

// Day display
function displayCurrentDay() {
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDay();

// Timeblock display color
var currentHour = dayjs().hour();

function colorCodeTimeblocks() {
  for (var i = 0; i < blockHour.length; i++) {
    if (currentHour > blockHour[i]) {
      timeBlock[i].addClass("past");
    } else if (currentHour < blockHour[i]) {
      timeBlock[i].addClass("future");
    } else {
      timeBlock[i].addClass("present");
    }
  }
}

console.log(currentHour);
console.log(blockHour);

colorCodeTimeblocks();

// Save button
saveBtn.on("click", function () {
  console.log("clicked");

  localStorage.setItem;
});
