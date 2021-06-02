function sindeficit(){
    

    let D = document.querySelector("#D").value;
    let CP = document.querySelector("#CP").value;
    let CMI = document.querySelector("#CMI").value;
    let CU = document.querySelector("#CU").value;
   
    
    
    

    let validacion1 = true;

    

    
    if(D.length === 0){
        alert ("rellene la casilla 1");
        validacion1 = false;
    }
    if(CP.length === 0){
        alert ("rellene la casilla 2");
        validacion1 = false;
    }
    if(CMI.length === 0){
        alert ("rellene la casilla 3");
        validacion1 = false;

    }
    if(CU.length === 0){
        alert ("rellene la casilla 4");
        validacion1 = false;
    }
    if(validacion1 == true){
        
        D = parseFloat(D);
        CP = parseFloat(CP);
        CMI = parseFloat(CMI);
        CU = parseFloat(CU);

        if(D >0){
            if(CP>0){
                if(CMI>0){
                    if(CU>0){
                        
    
    
                        let Q = (2*(D*CP)/CMI);
    
                        let resultado = Math.sqrt(Q);
    
                        let T = (resultado/D);
    
                        let N = (D/resultado);
    
                        let CTA =(CU*D)+(CP*D/resultado)+(CMI*resultado/2);
    
                        
    
                        let resultado1 = document.querySelector('#Q');
                        resultado1.value = resultado;
                        let resultado2 = document.querySelector('#N');
                        resultado2.value = N;
                        let resultado3 = document.querySelector('#T');
                        resultado3.value = T;
                        let resultado4 = document.querySelector('#CTA');
                        resultado4.value = CTA;
    
                        
                        
    
    
    
    
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