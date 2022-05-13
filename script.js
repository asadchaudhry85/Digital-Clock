function showTime() {
  var arrayOfWeekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  var date = new Date();
  var w = date.getDay();
  var weekdayName = arrayOfWeekdays[w];
  var d = date.getDate();
  var mt = date.getMonth();
  var y = date.getFullYear();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  var dates = weekdayName + " " + d + "" + "/" + mt + "/" + y;
  document.getElementById("DateDisplay").innerText = dates;
  document.getElementById("DateDisplay").textContent = dates;

  setTimeout(showTime, 1000);
}

showTime();
