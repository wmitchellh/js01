//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

//Question 1:

// Current date and time, unformatted:
var todaysDate=new Date();

//Returns textual day of week given numerical day of week
function dayOfWeek(todaysDate){
  var week = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var day = todaysDate.getDay();
  return week[day];
}

//Uses function to find current day of the week
var weekDay = dayOfWeek(todaysDate);
console.log("Today is " + weekDay);

//Time
var time = todaysDate.getHours() + ":" + todaysDate.getMinutes() + ":" + todaysDate.getSeconds();
console.log("Current Time: " + time);

//
document.getElementById("answer1").innerHTML=("Today is " + weekDay + " |"+ " Current time:" + time);

// Question 2:

//
var day = todaysDate.getDate();
var month = todaysDate.getMonth() + 1;
var year = todaysDate.getFullYear();

document.getElementById("answer2").innerHTML=("0"+month+ "-0" +day+ "-" +year +" | "+"0"+ month+ "/0" +day+ "/" +year+ " | " +"0"+ day+ "/0" +month+ "/" +year);
console.log("0"+month+ "-0" +day+ "-" +year);
console.log("0"+month+ "/0" +day+ "/" +year);
console.log("0"+day+ "/0" +month+ "/" +year);

//Canvas
(function(){
  'use strict'
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  var tool = new Tool();
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x,
  event.point.y, 20);
    c.fillColor = 'green';
  };
  paper.view.draw();
}())
