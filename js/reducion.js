


function reduccion() {

    let h = document.querySelector("#H").value;// H = COSTO ANUAL ALAMACENAR
    let k = document.querySelector("#K").value;//K = 
    let l = document.querySelector("#L").value;
    let c1 = document.querySelector("#C1").value;
    let c2 = document.querySelector("#C2").value;
    let q = document.querySelector("#Q").value;
    let d = document.querySelector("#D").value;

    let ym = 0 ;
    let y = 0;


    if (h == "" || k == "" || l == "" || c1 == "" || c2 == "" || q == "" || d == "") {


        alert("POR FAVOR RELLENE TODOS LOS CAMPOS")

    } else {
        h = parseFloat(h);
        k = parseFloat(k);
        l = parseFloat(l);
        c1 = parseFloat(c1);
        c2 = parseFloat(c2);
        q = parseFloat(q);
        d = parseFloat(d);


        if (h > 0) {
            if (k > 0) {
                if (l > 0) {
                    if (c1 > 0) {
                        if (c2 > 0) {
                            if (q > 0) {
                                if (d > 0) {

                                    //LOGICA DEL METODO

                                    if(c2>c1){

                                        alert("Precio de compra unitario c1 debe ser mayor que precio de compra unitario c2 ");

                                    }else{

                                        ym = Math.sqrt(((2 * k * d) / h));
                                        let tcu;
                                        let d1; //Discriminante
                                        let x1;
                                        let x2;
                                        let Q1;
                                
                                        if (q < ym) {
                                
                                            y = ym;
                                
                                            alert("RESULTADO ==La cantidad optima de pedido es: y=" + y);
                                
                                        } else if (q >= ym) {
                                
                                            tcu = (c1 * d) + ((k * d) / ym) + ((h * ym) / 2);
                                            let a = 1;
                                            let b = (2 * (c2 * d - tcu)) / h;
                                            let c = (2 * k * d) / h;
                                
                                            d1 = (b * b) - (4 * a * c);
                                
                                
                                            if (d < 0) {
                                
                                
                                                alert("Es imposible de resolver por que da como resultado una raiz imaginaria");
                                
                                            } else {
                                
                                                if (d1 > 0) {
                                
                                                    x1 = (-b + Math.sqrt(d1)) / (2 * a)
                                                    x2 = (-b - Math.sqrt(d1)) / (2 * a)
                                
                                
                                
                                                    if (x1 > x2 && x1 >= ym) {
                                
                                                        Q1 = x1;
                                
                                                    } else if (x2 >= ym) {
                                
                                                        Q1 = x2;
                                                    }//fin else if
                                
                                
                                                    if (q <= Q1 && q >= ym) {
                                
                                                        y = q;
                                
                                                        alert("RESULTADO == La cantidad optima de pedido es: " + y);
                                
                                                    } else if (q > Q1) {
                                
                                                        y = ym;
                                
                                                        alert("RESULTADO ==La Cantidad optima de pedido es: " + y)
                                
                                                    }
                                
                                
                                                } else if (d1 == 0) {
                                
                                                    x1 = (-b) / (2 * a);
                                                    x2 = (-b) / (2 * a);
                                                    Q1 = x1;
                                
                                
                                                    if (q <= Q1 && q >= ym) {
                                
                                                        y = q;
                                
                                                        alert("RESULTADO ==La cantidad optima de pedido es: " + y);
                                
                                                    } else if (q > Q1) {
                                
                                                        y = ym;
                                
                                                        alert("RESULTADO ==La Cantidad optima de pedido es: " + y)
                                
                                                    }
                                
                                                }//fin else if
                                
                                
                                
                                            }//fin else
                                
                                
                                
                                
                                
                                        }//fin else if


                                    }
                                


                                } else {

                                    alert("El campo Unidades por dia debe ser mayor a cero");
                                }



                            } else {

                                alert("El campo Tamaño del Pedido limite debe ser mayor a cero");
                            }



                        } else {

                            alert("El campo Precio de compra unitario c2 debe ser mayor a cero");
                        }



                    } else {

                        alert("El campo Precio de compra unitario c1 debe ser mayor a cero");
                    }



                } else {

                    alert("El campo Tiempo de espera debe ser mayor a cero");
                }

            } else {

                alert("El campo Costo de Preparacion de la colocacion de pedidos debe ser mayor a cero");
            }

        } else {

            alert("El campo Costo de mantenerlo en el inventario o almacenamiento debe ser mayor a cero");
        }




        

    }//FINAL ELSE DE VALIDACION CAMPOS VACIOS

}