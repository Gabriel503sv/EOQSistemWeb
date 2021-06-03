function sindeficit(){
    
    let C = document.querySelector("#C").value;//C = costo por unidad
    let D = document.querySelector("#D").value;//D = demanda anual
    let S = document.querySelector("#S").value;//S = costo por preparacion o costo por preparar una orden
    let H = document.querySelector("#H").value;//H = costo anual por almacenar o mantener
    let DTA = document.querySelector("#DTA").value;//DTA = dias de trabajo al anio

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

            if(D >0){
                if(S>0){
                    if(H >0){
                        if(DTA>0){
                            
                            let Q = (2*(D*S)/H);
        
                            let resultado = Math.sqrt(Q);

                            //alert(resultado);
        
                            let N = (D/resultado);
                            let L = (DTA/N);
                            let d = (D/DTA)

                            let R = d*L;
                            
                            let CTA;

                            if(C.length === 0){
                                CTA =((D/resultado)*S)+((resultado/2)*H);
                            }
                            else{
                                C = parseFloat(C);
                                if(C>0){
                                    CTA = D*C + ((D/resultado)*S)+((resultado/2)*H);    
                                }
                                else {
                                    alert("El Costo por unidad debe ser mayor a 0 ");
                                    return;
                                }
                            }
                            
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
                            alert("Los dias de trabajo al año deben ser mayores a 0 ");
                        }
                    }else{
                        alert("El costo de mantenimiento debe ser mayor a 0 ");
                    }
        
                }else{
                    alert("El costo por pedido debe ser mayor a 0 ");
                }
            }else{
                alert("La demanda anual debe ser mayor a 0");
            }
    }

}
