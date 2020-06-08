// =======================================================================================
// HW14 - from (UFO) data.js
// =======================================================================================

var tableData = data;
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#Enter");


// =======================================================================================
// Part-1 : Create and Load data on pressing 'Enter'

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#Enter");

// This function is triggered when the button is clicked
function enterClick() {
  // console.log("Hi, Welcome !!!");
      data.forEach((tableData) => {
       var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
       var cell = row.append("td");
        cell.text(value);
       });
      });
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", enterClick);

// =======================================================================================
// Part-2 : Filter data based on date input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

// Complete the event handler function for the form
function runFilter() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.date === inputValue);


  // This function is filters the date-input to display results

function runFilter() {
  // console.log("Hi, Welcome !!!");
      data.forEach((tableData) => {
       var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
       var cell = row.append("td");
        cell.text(value);
       });
      });
}

  console.log(filteredData);

}
// =======================================================================================

// You can also define the click handler inline
// button.on("Enter", function msg() {
  // function msg() {
  // console.log("Hi, Welcome !!!");
  // console.log(d3.event.target);
// };

// const node = document.getElementsByClassName(".input")[0];
// node.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//       // Build UFO data-table using Arrow Functions

    //   data.forEach((tableData) => {
    //   var row = tbody.append("tr");
    //   Object.entries(tableData).forEach(([key, value]) => {
    //   var cell = row.append("td");
    //   cell.text(value);
    //   });
    // });

    // Prevent the page from refreshing
    // d3.event.preventDefault();
//     }
// });
// =======================================================================================
// // Console.log the weather data from data.js
// console.log(tableData);

// // Step 1: Loop Through `tableData` and console.log each UFO report object
// data.forEach(function(tableData) {
//   console.log(tableData);
// });

// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each URO report value
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per UFO report value:
// // (DateTime,City,State,Country,Shape,DurationMinutes,Comments)
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value in the URO report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with UFO report values:
// // (DateTime,City,State,Country,Shape,DurationMinutes,Comments)
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value in the UFO report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
// =======================================================================================


// =======================================================================================
// // Getting a reference to the button on the page with the id property set to `click-me`
// var button = d3.select("filter-btn");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

// //   // Prevent the page from refreshing
// //   d3.event.preventDefault();
  
// // Select the input element and get the raw HTML node
// var inputElement = d3.select("#datetime");

// // Get the value property of the input element
// var inputValue = inputElement.property("value");

// console.log(inputValue);
// console.log(tableData);

// var filteredData =tableData.filter(tableData => tableData.datetime === inputValue);

// console.log(filteredData);
