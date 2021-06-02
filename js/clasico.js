function sindeficit(){
    

    let D = document.querySelector("#D").value;
    let S = document.querySelector("#S").value;
    let H = document.querySelector("#H").value;
    let DTA = document.querySelector("#DTA").value;
   
    
    
    

    let validacion1 = true;

    

    
    if(D.length === 0){
        alert ("rellene la casilla 1");
        validacion1 = false;
    }
    if(S.length === 0){
        alert ("rellene la casilla 2");
        validacion1 = false;
    }
    if(H.length === 0){
        alert ("rellene la casilla 3");
        validacion1 = false;

    }
    if(DTA.length === 0){
        alert ("rellene la casilla 4");
        validacion1 = false;
    }
    if(validacion1 == true){
        
        D = parseFloat(D);
        S = parseFloat(S);
        H = parseFloat(H);
        DTA = parseFloat(DTA);

        if(D >=0){
            if(S>=0){
                if(H >=0){
                    if(DTA>=0){
                        
    
    
                        let Q = (2*(D*S)/H);
    
                        let resultado = Math.sqrt(Q);

                        alert(resultado);
    
                        
    
                        let N = (D/resultado);
                        let L = (DTA/N);
                        let d = (D/DTA)

                        let R = d*L;
                        
    
                        let CTA =(S*D)+((D/Q)*S)+(H*resultado/2);
    
                        
    
                        let resultado1 = document.querySelector('#Q');
                        resultado1.value = resultado;
                        let resultado2 = document.querySelector('#N');
                        resultado2.value = N;
                        let resultado3 = document.querySelector('#L');
                        resultado3.value = L;
                        let resultado4 = document.querySelector('#R');
                        resultado4.value = R;
                        let resultado5 = document.querySelector('#CTA');
                        resultado5.value = CTA;
                     
    
                        
                        
    
    
    
    
                    }else{
                        alert("El Campo debe contener un numero Mayor de 0 ");
                    }
                }else{
                    alert("El Campo debe contener un numero Mayor de 0 ");
                }
    
            }else{
                alert("El Campo debe contener un numero Mayor de 0 ");
            }
        }else{
            alert("El Campo debe contener un numero Mayor de 0 ");
        }

    }
    


}
