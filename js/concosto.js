function condeficit(){
    

    let DC = document.querySelector("#DC").value;
    let CPC = document.querySelector("#CPC").value;
    let CMIC = document.querySelector("#CMIC").value;
    let CUC = document.querySelector("#CUC").value;
    let CFC = document.querySelector("#CFC").value;
   
    
    
    

    let validacion2 = true;

    

    
    if(DC.length === 0){
        alert ("rellene la casilla 1");
        validacion2 = false;
    }
    if(CPC.length === 0){
        alert ("rellene la casilla 2");
        validacion2 = false;
    }
    if(CMIC.length === 0){
        alert ("rellene la casilla 3");
        validacion2 = false;

    }
    if(CUC.length === 0){
        alert ("rellene la casilla 4");
        validacion2 = false;
    }
    if(CFC.length === 0){
        alert ("rellene la casilla 5");
        validacion2 = false;
    }
    if(validacion2 === true){
        
        DC = parseFloat(DC);
        CPC = parseFloat(CPC);
        CMIC = parseFloat(CMIC);
        CUC = parseFloat(CUC);
        CFC = parseFloat(CFC);

        if(DC >=0){
            if(CPC>=0){
                if(CMIC>=0){
                    if(CUC>=0){
                        if(CFC>=0){

                            let QC =(2*CPC*DC*(CFC+CMIC))/((CFC)*(CMIC));
    
                            let resultadoC = Math.sqrt(QC);
        
                            let TC = (resultadoC/DC);
        
                            let NC = (DC/resultadoC);
        

                            let S1 = ((2*CPC*DC*CMIC)/((CFC)*(CFC+CMIC)));          

                            

                            let S = Math.sqrt(S1);
                            let imax = (resultadoC-S);
                            let imaxalcuadrado = (Math.pow(imax,2));

                            let salcuadrado = (Math.pow(S,2));

                            let CTAC = (CUC*DC)+(NC)*(CPC)+(((imaxalcuadrado)/(2*resultadoC))*(CMIC))+((salcuadrado)/(2*resultadoC))*(CFC);

                            let SZ = ((resultadoC*CMIC)/(CMIC+CFC));


        
                            
        
                            let resultado1C = document.querySelector('#QC');
                            resultado1C.value = resultadoC.toFixed(2);
                            let resultado2C = document.querySelector('#NC');
                            resultado2C.value = NC.toFixed(0);
                            let resultado3C = document.querySelector('#TC');
                            resultado3C.value = TC.toFixed(2);
                            let resultado4C = document.querySelector('#CUCC');
                            resultado4C.value = imax.toFixed(0);
                            let resultado5C = document.querySelector('#CTAC');
                            resultado5C.value = CTAC.toFixed(2);
                            let resultado6C = document.querySelector('#S');
                            resultado6C.value = SZ.toFixed(2);
                            

                        }else{

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
        }else{
            alert("El Campo debe contener un numero Mayor de 0 ");
        }

    }
    


}