function crearAuto(){

	 var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

    var objAuto = new Auto("Chevrolet",
    	                    2001,
    	                    "negro",
    	                    80, 
    	                    50,
    	                    50, 10);

    objAuto.Dibujar(context);

    //Declaración, Creación e Inicialización de un arreglo
	var arregloAutos = new Array(
			new Auto("KIA", 2018, "red", 80, 50, 100, 10),
			new Auto("Mazda", 2015, "black", 100, 50, 200, 10),
			new Auto("Volkswagen", 1999, "pink", 100, 50, 300, 10)
		);
	for (var i = arregloAutos.length - 1; i >= 0; i--) {
		arregloAutos[i].Dibujar(context);
    }  

}	