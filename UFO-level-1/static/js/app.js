////////////////////////////////////////////////////////////////////////
//PART 1 - AUTOMATIC TABLE
// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each UFO report object
tableData.forEach(function (ufoReport) {
  console.log(ufoReport);

  // Step 2:  Use d3 to append one table row `tr` for each ufo report object
  var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to console.log each ufo report value
  Object.entries(ufoReport).forEach(function ([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////  
//PART 2 - DATA FORM SEARCH
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click",runEnter);
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

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  //Clear table to accomodate filtering
  tbody.html("")

  filteredData.forEach(function (ufoReport) {
    console.log(ufoReport);
  
    // Append one table row `tr` for each filtered value
    var row = tbody.append("tr");
  
    // Use `Object.entries` to console.log each filtered value
    Object.entries(ufoReport).forEach(function ([key, value]) {
      console.log(key, value);
  
      // Append a cell to the row for each filtered value
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

