const datos = {
  dimensiones: {
    titulo: "DIMENSIONES DEL VACÍO",
    texto: `<p>El Vacío de Boötes tiene 250 millones de años luz de diámetro. Es tan grande que si viajaras a la velocidad de la luz, tardarías 250 millones de años en cruzarlo.</p><ul><li>Distancia a la Tierra: 700 millones de años luz</li><li>Descubierto por Robert Kirshner en 1981</li></ul>`
  },
  descubrimiento: {
    titulo: "DESCUBRIMIENTO",
    texto: `<p>En 1981, los astrónomos encontraron casi nada. Esperaban ver miles de galaxias y solo vieron 60. A este lugar lo llamaron "El Gran Vacío".</p>`
  },
  misterio: {
    titulo: "EL MISTERIO",
    texto: `<p>¿Por qué está vacío? Algunos creen que varias burbujas vacías pequeñas se unieron para formar una super-burbuja. Otros creen que es prueba de otra física.</p><p>Es el lugar más aterrador del universo conocido.</p>`
  }
};

function mostrarInfo(tipo, elemento) {
  elemento.classList.add('despegar');
  setTimeout(()=> elemento.classList.remove('despegar'), 400);

  document.getElementById('modalTitulo').innerText = datos[tipo].titulo;
  document.getElementById('modalCuerpo').innerHTML = datos[tipo].texto;
  document.getElementById('modalInfo').className = 'modal-visible';
}

function cerrarInfo() {
  document.getElementById('modalInfo').className = 'modal-oculto';
}

