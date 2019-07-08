
 class Auto{ 
   constructor(M, mod, c, al, an, x, y){
    this.Marca = M; 
    this.Modelo = mod;
    this.Color = c;
    this.Altua = al;
    this.Ancho = an;
    this.X = x;
    this.Y = y;
} 

Dibujar(contextoDeDibujo){

	contextoDeDibujo.strokeStyle = this.Color;

	contextoDeDibujo.beginPath();
	contextoDeDibujo.fillStyle = "blue";
     contextoDeDibujo.moveTo(150, 20)
     contextoDeDibujo.lineTo(300,20)
     contextoDeDibujo.lineTo(350, 70)
     contextoDeDibujo.lineTo(100, 70)
     contextoDeDibujo.lineTo(150, 20)
     contextoDeDibujo.fill();

     contextoDeDibujo.beginPath();
	 contextoDeDibujo.fillStyle = "blue";
     contextoDeDibujo.moveTo(50,70)
     contextoDeDibujo.lineTo(400,70)
     contextoDeDibujo.lineTo(400, 130)
     contextoDeDibujo.lineTo(50, 130)
     contextoDeDibujo.lineTo(50,70)
     contextoDeDibujo.fill();

     contextoDeDibujo.beginPath();
     contextoDeDibujo.fillStyle = "white";
     contextoDeDibujo.moveTo(120, 70)
     contextoDeDibujo.lineTo(165, 70)
     contextoDeDibujo.lineTo(165, 25)
     contextoDeDibujo.fill();

     
    

     //dibujar rueda
     contextoDeDibujo.beginPath();
	 contextoDeDibujo.fillStyle = "black";

     contextoDeDibujo.arc(140, 130, 30, 0, 2*Math.PI, true);

     contextoDeDibujo.arc(350, 130, 30, 0, 2*Math.PI, true);
     contextoDeDibujo.fill();
    }
}	
    