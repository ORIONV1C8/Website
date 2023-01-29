function bienvenida () {
	var nombre = prompt("Ingresa tu nombre");
	alert ("Bienvenido " + nombre);
}
bienvenida ();

function valorsuperior (valor1, valor2) {
	if (valor1 > valor2) {
		return valor1;
	} else {
		return valor2;
	}
}
function valorinferior (valor1, valor2) {
	if (valor1 < valor2) {
		return valor1;
	} else {
		return valor2;
	}
}

(function(){
	function scope () {
		var equilibrio = ("La muerte y la vida deben estar separadas");
		function amor () {
			var equilibrio = ("Los muertos deben estar separados de los vivos");
			alert(equilibrio);
		}
		amor();
	}
//	scope();
}())

var elementosP = document.getElementsByTagName('p');
var footer = document.getElementById('13');
footer.innerHTML = "Este es el pie de pagina";

var modificacion = document.getElementById("Elysium");
modificacion.textContent = "Elysium (El Todo)";

var elemento = document.getElementById("gif");
elemento.setAttribute("src", "https://s.4cdn.org/image/title/61.gif");

(function(){
	var cambiar = function(){
		document.getElementById('gif');
		gif.setAttribute("src", "https://s.4cdn.org/image/title/245.png");
	}
	var boton = document.getElementById('cambio');
	boton.addEventListener("click", cambiar);
}())