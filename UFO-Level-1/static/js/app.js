// from data.js
var tableData = data;
var tbody = d3.select("tbody");

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

// Step 3:  Use `Object.entries` to console.log each URO report value
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
  });
});