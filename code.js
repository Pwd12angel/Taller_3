
function promedio (lista){
    /*
    Guardaremos la suma de la lista
let sumaLista = 0;

Ciclo para recorrer la lista y sumarla 
for(let i = 0; i < lista.length; i++){
    //Operacion para ir sumando
    sumaLista = sumaLista + lista[i];
}
*/

const sumaLista = lista.reduce(
    (valorAcumulado = 0 , numevoElemento)=>
         valorAcumulado + numevoElemento , 0 
    
);

let resultado = sumaLista / lista.length;

return resultado;

}

//Calcular Mediana 
 const lista = [
    100,
    3000,
    500,
    20000000
 ];


function medianaArreglo(listaFinal){
    //Obtenetemos la mitad de la lista 
  const mitad = parseInt(listaFinal.length / 2);

   //Funcion para saber si es par o no nos devolvera true o false 
 function esPar(numero){

    //Residuo entre la divicion de un numero % 
    if(numero % 2 === 0){
        return true;
    }else {
        return false;
    }
 }

 //Variable para almacenar la mediana 
 let mediana;

 //Metodo para ordenar el arreglo de menor a mayor 
 const arrayOrdenado = listaFinal.sort((num1, num2) => {
    return num1 - num2;

 });

 //Imprimimos el array ordenado
 console.log(arrayOrdenado);

 //Condicional para saber si la lista es par o impar 
 if(esPar(listaFinal.length)){

    //Imprimimos el resultado si es para o no es par 
    console.log("Es par");
    //Guardamos los 2 elementos que se tienen en medio de la lista 
    //En caso de que sea par o no 
    const elemento1 = listaFinal[mitad];
    const elemento2 = listaFinal[mitad - 1];

    //Imprimimos los 2 elementos que guardamos 
    console.log("Los elementos son "+elemento1+" "+elemento2);

    //Mandamos los 2 elementos que obtubimos para sacar el promedio
    const promedioElemento1y2 = promedio([elemento1,elemento2]);

    //guardamos el resultado en nuestra variable promedio 
    mediana = promedioElemento1y2;
    
    //Imprimos el resultado 
    console.log("El promedio es: "+ mediana);

 }else {

    //Imprimimos que no es par 
    console.log("no es par");

    //Sacamos la mitad de la lista 
    mediana = listaFinal[mitad]; 

    //Imprimimos la mediana 
    console.log(mediana);
 }

}


