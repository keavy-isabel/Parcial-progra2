//Agregar fila
function agregarFila() {
  var tabla = document.getElementById("tabla")
  var fecha = document.getElementById("fecha").value
  var bebida = document.getElementById("bebida").value
  var cantidad = document.getElementById("cantidad").value
  var row = tabla.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var mensaje = null;

  cell1.innerHTML = fecha
  cell2.innerHTML = bebida
  cell3.innerHTML = cantidad
  cell4.innerHTML = "beep"
  }
