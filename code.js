function calcularPromedio(lista) {
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
    (valorAcumulado = 0, numevoElemento) => valorAcumulado + numevoElemento,
    0
  );

  let resultado = sumaLista / lista.length;

  return resultado;
}

function calcularMediana(listaFinal) {
  //Obtenetemos la mitad de la lista
  const mitad = parseInt(listaFinal.length / 2);

  //Funcion para saber si es par o no nos devolvera true o false
  function esPar(numero) {
    //Residuo entre la divicion de un numero %
    if (numero % 2 === 0) {
      return true;
    } else {
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
  if (esPar(listaFinal.length)) {
    //Imprimimos el resultado si es para o no es par
    console.log("Es par");
    //Guardamos los 2 elementos que se tienen en medio de la lista
    //En caso de que sea par o no
    const elemento1 = listaFinal[mitad];
    const elemento2 = listaFinal[mitad - 1];

    //Imprimimos los 2 elementos que guardamos
    console.log("Los elementos son " + elemento1 + " " + elemento2);

    //Mandamos los 2 elementos que obtubimos para sacar el promedio
    const promedioElemento1y2 = promedio([elemento1, elemento2]);

    //guardamos el resultado en nuestra variable promedio
    mediana = promedioElemento1y2;

    //Imprimos el resultado
    console.log("El promedio es: " + mediana);
  } else {
    //Imprimimos que no es par
    console.log("no es par");

    //Sacamos la mitad de la lista
    mediana = listaFinal[mitad];

    //Imprimimos la mediana
    console.log(mediana);
  }
}

function calcularModa(lista) {
  //Declaramos el objeto
  const lista1Count = {};

  lista.map(function (elemento) {
    //condicional para saber si ya existe el elemento en la lista
    if (lista1Count[elemento]) {
      //Le sumaremos 1 a nuestra lista de objetos
      lista1Count[elemento] += 1;
    } else {
      //Crearemos el objeto si no existe
      lista1Count[elemento] = 1;
    }
  });

  const convercion = Object.entries(lista1Count);
  const lista1Array = Object.entries(lista1Count).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = lista1Array[lista1Array.length - 1];

  console.log(lista1Count);
  console.log(convercion);
  console.log(lista1Array);
  console.log(moda);
}

//Creamos el array de objetos 
const arrayCreditos = [
  {
    asignatura: "Programacion",
    nota: 10,
    credito: 20,
  },
  {
    asignatura: "Desarrollo web",
    nota: 8,
    credito: 15,
  },
  {
    asignatura: "Base de datos",
    nota: 9,
    credito: 15,
  }
];

//Creamos un arreglo con la multiplicasion de los creditos con la nota 
const notasCreditos = arrayCreditos.map(
    function (notaObjeto) 
{
  return notaObjeto.nota * notaObjeto.credito;

});

//sumamos los valores del arreglo nuevo 
const sumOfNotesWithCredit = notasCreditos.reduce(

    function (suma = 0, newVal ){
        return suma + newVal;

    }
);

const creditos = arrayCreditos.map(
    function (notaObjeto){
        return notaObjeto.credito;
    }
);

const sumOfCredits = creditos.reduce(
    function (sum = 0 , newVal){
        return sum + newVal;
    }
);


const promedioPonderadoNotaConCreditos = sumOfNotesWithCredit / sumOfCredits;



console.log(notasCreditos);
console.log(sumOfNotesWithCredit);
console.log(creditos);
console.log(sumOfCredits);
console.log(promedioPonderadoNotaConCreditos);
