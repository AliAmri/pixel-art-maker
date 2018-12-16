
// When size is submitted by the user, call makeGrid()
var button = document.getElementById('button')
button.addEventListener("click", function(event){
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Select size input
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  // Select color input
  var color = document.getElementById('colorPicker').value;


  // Select the table
  var table = document.getElementById('pixelCanvas');

  // Clear the table if existing
  while(table.rows.length>0){
    table.deleteRow(0);
  }
  // Create new table

  for (var i = 0; i < height; i++){

    var row = table.insertRow(i);
    for (var n = 0; n < width; n++){
      var cell = row.insertCell(n);
      
      // change the cell's color once clicked
      cell.addEventListener("click",function(event){
        event.target.style.backgroundColor = color;
      }
    );
    }
  }
}
