
function promedio (lista){
    //Guardaremos la suma de la lista
//let sumaLista = 0;

//Ciclo para recorrer la lista y sumarla 
//for(let i = 0; i < lista.length; i++){
    //Operacion para ir sumando
  //  sumaLista = sumaLista + lista[i];
//}

const sumaLista = lista.reduce(
    function (valorAcumulado = 0 , numevoElemento){
        return valorAcumulado + numevoElemento;
    }
);

let resultado = sumaLista / lista.length;

return resultado;

}



