function principal(){
	var origem = document.getElementById("origem").value;
		var destino = document.getElementById("destino").value;
		var palavra = document.getElementById("palavra").value;
		var cumprimento = (8 + palavra.length);

        origem = parseInt(origem);   
        destino = parseInt(destino);
        cumprimento = parseInt(cumprimento); 
        
        var total = (origem + destino + cumprimento); 

	    var convertido  = Converte(total); 


		var bits =  Checksum(convertido);
		
		//alert(convertido+"\n"+bits); 

		var text;
		text =" Dados Não Alterado !!!"
		document.getElementById("msg").innerHTML = text;

		function Converte(numero){
		
		    var bits = ""; 
			
			while(numero > 1){
				bits += (numero % 2);    
				numero /= 2;
				numero = Math.floor(numero);
			}
			bits += 1;
			
			var tam = (16 - bits.length);
			
			for(var i = 0; i < tam; i++){ 
				bits += 0;
			}
            
			var inverterPosicao = "";
			for(var i = (bits.length - 1); i >= 0; i--){ 
				inverterPosicao += bits[i]; 
			}
			
			return inverterPosicao;
		}

	function Checksum(convertido){ 
		var inverterNumero = "";
		for(var i = 0; i < convertido.length; i++){
			if(convertido[i] == 0)inverterNumero += 1;
			else inverterNumero += 0;
		}
		return inverterNumero;
	}
}	