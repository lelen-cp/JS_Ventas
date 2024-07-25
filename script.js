function crearTiendas(contenedorID, min, cantidadTiendas) {
  //encontrar contenedor por su id
  let elementoContenedor = document.getElementById(contenedorID);

  // loop para crear tantas tiendas como se pidan
  for (
    let conteoTiendas = 1;
    conteoTiendas <= cantidadTiendas;
    conteoTiendas++
  ) {
    let textoEtiqueta = "Tienda " + conteoTiendas;

    let ParrafoTienda = crearParrafoTienda(textoEtiqueta, min);

    elementoContenedor.appendChild(ParrafoTienda);
  }
}

function crearParrafoTienda(textoLabel, valorMin) {
  let elementoParrafo = document.createElement("p");

  let elementoEtiqueta = document.createElement("label");
  elementoEtiqueta.innerText = textoLabel + ": ";

  elementoEtiqueta.setAttribute("for", textoLabel);

  let elementoInput = document.createElement("input");

  elementoInput.className = "form-control";
  elementoInput.setAttribute("type", "number");
  elementoInput.setAttribute("id", textoLabel);
  elementoInput.setAttribute("min", valorMin);
  elementoInput.setAttribute("value", 0);

  //Agregar label al input de parrafo
  elementoParrafo.appendChild(elementoEtiqueta);
  elementoParrafo.appendChild(elementoInput);

  return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento) {
  let miTexto = elemento.value; //Extraer el valor del parametro "elemento" y almacenarlo en la variable.
  let miNumero = Number(miTexto); //Convierte el valor de lo almacenado en "miTexto" y convertirlo a número.

  return miNumero;
}

function calcular() {
  let ventas = [];
  let posicionVentas = 0;
  let elementosVentas = document.getElementById("itemsTiendas");

  for (let item of elementosVentas.children) {
    let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
    ventas[posicionVentas] = valorVenta;
    posicionVentas = posicionVentas + 1;
  }

  //Empecemos con los cálculos

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = calcularMayor(ventas);
  let ventaMenor = calcularMenor(ventas);

  let mensajeSalida =
    "Total Ventas: " + 
    totalVentas +
    "  |  Venta Mayor: " +
    ventaMayor +
    "  |  Venta Menor: " +
    ventaMenor;
  let elementoSalida = document.getElementById("parrafoSalida");

  elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array) {
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
