// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per ufo report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the ufo report object
    var cell = row.append("td");
  });
});

// // Step 5: Use d3 to update each cell's text with ufor report values
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the form
var form = d3.select("#form");

// Create event handlers for pressing the enter key
form.on("submit",runEnter);

// Create the function to run the event
function runEnter() {

 // Prevent the page from refreshing
 d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // Set the span tag in the h1 element to the text that was entered in the form
  d3.select("h1>span").text(inputValue);
}