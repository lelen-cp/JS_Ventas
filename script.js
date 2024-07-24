//Función para extraer el valor numerico ingresado en cada tienda

function extraerNumeroDesdeElemento(elemento) {
  let miElemento = document.getElementById(elemento); //Variable que extrae el valor del parametro (elemento).
  let miTexto = miElemento.value; //Extraer el valor del parametro "elemento" y almacenarlo en la variable.
  let miNumero = Number(miTexto); //Convierte el valor de lo almacenado en "miTexto" y convertirlo a número.

  return miNumero;
}

function calcular() {
  let ventas = [];

  ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
  ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
  ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
  ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
  ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
  ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

  //Empecemos con los cálculos

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = calcularMayor(ventas);
  let ventaMenor = calcularMenor(ventas);

  let mensajeSalida =
    "Total Ventas: " +
    totalVentas +
    " / Venta Mayor: " +
    ventaMayor +
    " / Venta Menor: " +
    ventaMenor;
  let elementoSalida = document.getElementById("parrafoSalida");

  elementoSalida.textContent = mensajeSalida;
}

function sumarTotal() {
  let total = 0;
  for (let venta of array) {
    total = total + venta;
  }
  return total;
}

function calcularMayor(array) {
  let maximo = array[0];
  for (let venta of array) {
    if (venta > maximo) {
      maximo = venta;
    }
  }
  return maximo;
}

function calcularMenor(array) {
  let minimo = array[0];
  for (let venta of array) {
    if (venta < minimo) {
      minimo = venta;
    }
  }
  return minimo;
}

function limpiarFormulario() {
  location.reload();
}
