let nArticulos;
document.querySelector('#resultado').style.display="none";

function generarTabla(){
    nArticulos = document.querySelector('#articulos').value;
    parseInt(nArticulos, 10);
    $("#resultado").empty();
    document.querySelector('#resultado').style.display="none";

    let tabla = document.querySelector('#tabla');
    while(tabla.firstChild){
        tabla.removeChild(tabla.firstChild);
    }

    document.querySelector('#variables').style.display="";
    var vari = `
    <div>Ki = Costo de preparación</div>
    <div>Di = Tasa de demanda</div>
    <div>hi = Costo de retención unitario por unidad de tiempo </div>
    <div>ai = Requerimiento de área de almacenamiento por unidad de inventario</div>
    `;
    $("#variables").empty();
    var v = document.createElement("div");
    v.innerHTML = vari;
    document.querySelector('#variables').appendChild(v);
    
    if(nArticulos > 0){
        var topTable = `
        <tr>
        <th>Articulo i</th>
        <th>Ki ($)</th>
        <th>Di (unidades por dia)</th>
        <th>Hi ($)</th>
        <th>ai (pies²)</th>
        </tr>`;
        var tr1 = document.createElement("tr");
        tr1.innerHTML = topTable;
        document.querySelector('#tabla').appendChild(tr1);

        for (let x = 0; x < nArticulos; x++) {
            var fila =  `<td><input id="${x}-0" type="text" value="${x + 1}" disabled></td>`+
                        `<td><input id="${x}-1" type="text"></td>`+ 
                        `<td><input id="${x}-2" type="text"></td>`+
                        `<td><input id="${x}-3" type="text"></td>`+
                        `<td><input id="${x}-4" type="text"></td>`;
            
            var tr = document.createElement("tr");
            tr.innerHTML = fila;
            document.querySelector('#tabla').appendChild(tr);
        }
    
        document.querySelector('#form2').style.display="block";

    }else{
        document.querySelector('#form2').style.display="none";
        document.querySelector('#variables').style.display="none";
        document.querySelector('#resultado').style.display="none";
        alert("El numero ingresado es invalido");
    }
}

function calcular(){
    var validar = true;
    let areaMax = document.getElementById('areaMax').value;
    parseFloat(areaMax);

    for (let y = 0; y < nArticulos; y++){
        let ki = document.getElementById(`${y}-1`).value;
        parseFloat(ki);
        let di = document.getElementById(`${y}-2`).value;
        parseFloat(di);
        let hi = document.getElementById(`${y}-3`).value;
        parseFloat(hi);
        let ai = document.getElementById(`${y}-4`).value;
        parseFloat(ai);
        
        if(ki == 0 || di == 0 || hi == 0 || ai == 0){
            validar = false;
        }
    }
    if(areaMax == 0){
        validar = false;
    }
    
    if(validar){
        var alfa = 0;
        var valorar = 0;
        let resultados = new Array();
        
        do{
            let total = 0;
            if(resultados.length != 0){
                for (let i = 0; i < nArticulos; i++) {
                    resultados.pop();
                }
            }

            for (let y = 0; y < nArticulos; y++) {
                let ki = document.getElementById(`${y}-1`).value;
                parseFloat(ki);
                let di = document.getElementById(`${y}-2`).value;
                parseFloat(di);
                let hi = document.getElementById(`${y}-3`).value;
                parseFloat(hi);
                let ai = document.getElementById(`${y}-4`).value;
                parseFloat(ai);
                
                let valor = (2*(ki)*(di)) / (hi - (2*(alfa)*(ai)));
                let raiz = Math.sqrt(valor);
                resultados.push(raiz);
            }
            
            for (let y = 0; y < resultados.length; y++) {
                total += resultados[y];
            }

            valorar = total - areaMax;
            if(valorar > 0){
                alfa -= 0.05;
            }
        }while(valorar > 0);
        
        let costo = 0;
        for (let y = 0; y < nArticulos; y++) {
            let ki = document.getElementById(`${y}-1`).value;
            parseFloat(ki);
            let di = document.getElementById(`${y}-2`).value;
            parseFloat(di);
            let hi = document.getElementById(`${y}-3`).value;
            parseFloat(hi);

            costo += (((ki*di)/(resultados[y]))+((hi*resultados[y])/2));
        }

        $("#resultado").empty();
        document.querySelector('#resultado').style.display="";
        resultado = "La solución óptima es:<br>";
        for (let y = 0; y < resultados.length; y++) {
            resultado += `y${y+1} = ${resultados[y].toFixed(2)} unidades<br>`;
        }
        resultado += `Costo = $ ${costo.toFixed(2)}/dia.<br>`;
        // alert(resultado);
        var r = document.createElement("div");
        r.innerHTML = resultado;
        document.querySelector('#resultado').appendChild(r);

    }else{
        alert("Por favor ingrese todos los campos");
    }
}