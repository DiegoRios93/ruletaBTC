/*
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
*/


let oportunitys = 0;


confirmaPackUno.addEventListener("click", agregarPackUnoAlHTML);
confirmaPackDos.addEventListener("click", agregarPackDosAlHTML);
confirmaPackTres.addEventListener("click", agregarPackTresAlHTML);

function agregarPackUnoAlHTML(){
	//localStorage.setItem('paqueteComprado1', 1);
		
		oportunitys = Number (localStorage.getItem('COMPRA')) + 1;
			localStorage.setItem('COMPRA', oportunitys)
		
}


function agregarPackDosAlHTML(){
	//localStorage.setItem('paqueteComprado2', 3);
	oportunitys = Number (localStorage.getItem('COMPRA')) + 3;
		localStorage.setItem('COMPRA', oportunitys)
}

function agregarPackTresAlHTML(){
	//localStorage.setItem('paqueteComprado3', 10);
	oportunitys= Number (localStorage.getItem('COMPRA')) + 10;
		localStorage.setItem('COMPRA', oportunitys)

}








