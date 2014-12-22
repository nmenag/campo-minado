function iniciarCampo(){
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){                
          var div = document.createElement("div");
          div.id = i + "" + j;                  
          div.addEventListener("click", clickCelda, true);                  
          campoMinado.appendChild(div);
        }
      }        
    }

    function clickCelda(){
      var celdaId = this.id.split("")[0] + this.id.split("")[1];
      var x = this.id.split("")[0], y = this.id.split("")[1]
      darResultado(x, y);
    }

    function darResultado(x,y){
      var campo = [ [ 1 , 0 , 0 ] ,
              [ 0 , 1 , 0 ] ,
              [ 1 , 0 , 1 ] ];

      if(x <= 2 && y <= 2){
        var posicion = campo[x][y];
        //If ternario o compacto
        posicion == 1 ? explosion() : ganaste() ;
      }
    }

    function explosion(){
      alert("BOOM!!");
      resultado.innerHTML = "BOOM! Elegiste un area minada :(";
    }

    function ganaste(){
      resultado.innerHTML = "Eres un ganador :)";    
    }