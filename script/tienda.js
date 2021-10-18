
confirmaPackUno.addEventListener("click", agregarPackUnoAlHTML);
confirmaPackDos.addEventListener("click", agregarPackDosAlHTML);
confirmaPackTres.addEventListener("click", agregarPackTresAlHTML);

function agregarPackUnoAlHTML(){
	localStorage.setItem('paqueteComprado', 1);
}

function agregarPackDosAlHTML(){
	localStorage.setItem('paqueteComprado', 3);
}

function agregarPackTresAlHTML(){
	localStorage.setItem('paqueteComprado', 10);
}



