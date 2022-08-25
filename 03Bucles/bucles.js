// ejemplo de uso de bucles
const razasDePerro = [
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo de Argentino",
    "San bernardo",
    "Mastin del pirineo",
    "Mastin Español",
    "Chihuahua",
    "Pastor Aleman",
    "Labero Irlandes"
]
// para esta nueva version de js se agrego el bucle for/or que permite iterar sobre los elementos de objetos iterables
// primero con un for tradicional
for(let indice = 0; indice < razasDePerro.length; indice++){
    console.log(razasDePerro[indice]);
}
// ahora con for/of
for(const raza of razasDePerro){
    console.log(raza);
}
// tambien existe un bucle for/in que itera sobre las llaves del objeto en el caso de un arreglo estas llaves son los indices
for(const indice in razasDePerro){
    console.log(razasDePerro[indice]);
}