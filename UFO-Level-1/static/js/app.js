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

filteredData = [] ;
let i = 0;

tableData.forEach((element) => {
  if (element.date === inputValue) {
  console.log(element);
  i++
  }
});

  console.log(filteredData);

}
// =======================================================================================
