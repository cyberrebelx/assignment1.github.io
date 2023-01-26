function createTable() {
    var rows = document.getElementById("norows").value;
    var cols = document.getElementById("nocols").value;
    var table = document.createElement("table");
    for (var i = 1; i <= rows; i++) {
      var row = document.createElement("tr");
      for (var j = 1; j <= cols; j++) {
        var cell = document.createElement("td");
        cell.innerHTML = i * j;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    var tableContainer = document.getElementById("table");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}
//3 ways to load a function upon loading a webpage
document.addEventListener( "DOMContentLoaded", createTable());
//window.onload= createTable();
//<body onload= "function()"></body>  --this goes on the html page