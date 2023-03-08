//nombre//
var informacion = document.getElementById("nacionalidad");

informacion.addEventListener("mouseover", function() {
	var informacion2 = document.createElement("span");
	informacion2.className = "informacion2";
	informacion2.innerHTML = "Argentino";

	informacion.appendChild(informacion2);
});

informacion.addEventListener("mouseout", function() {
	var informacion2 = document.querySelector(".informacion2");
	informacion.removeChild(informacion2);
});

//dni//
var informacion3 = document.getElementById("dni");

informacion3.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "42.459.425";

    informacion3.appendChild(informacion2);
});

informacion3.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion3.removeChild(informacion2);
});

//direccion//
var informacion4 = document.getElementById("direccion");

informacion4.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "calle 9 de julio 2365";

    informacion4.appendChild(informacion2);
});

informacion4.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion4.removeChild(informacion2);
});

//contacto//
var informacion5 = document.getElementById("telefono");

informacion5.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "(11)098745";

    informacion5.appendChild(informacion2);
});

informacion5.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion5.removeChild(informacion2);
});

const h2s = document.querySelectorAll('.contenido section h2');

h2s.forEach(h2 => {
  const ul = h2.nextElementSibling;
  ul.style.display = 'none';
  h2.addEventListener('click', () => {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});