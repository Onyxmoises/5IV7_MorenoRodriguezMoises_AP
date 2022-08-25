// array
// forEach
// en la siguiente linea de codigo hace lo mismo que un bucle; pero itera sobre todos los elementos del arreglo, cad que lo hace ejecuta una funcion su indice y el arreglo original
razasDePerro.forEach((raza, indice, arregloOriginal) => console.log(raza)); 
// en caso de utilizar algunos parametros los podemos omitir
razasDePerro.forEach(raza => console.log(raza));
/*
Funcion map
itera sobre los elementos del arreglo regresa un arreglo diferente con el que nos muestra originalmente 
*/
const razasDePerroEnMayusculas = razasDePerro.map((raza, indice, arregloOriginal) => raza.toUpperCase());
/*
hay otras funciones utilies como 
find
nos permite buscar un elemento detro del arreglo
si lo encuentra, lo regresa y si no lansa "undi"
por ejemplo chihuahua
*/
if(razasDePerro.find((raza, indice, arregloOriginal) => raza === "Chihuahua")){
    console.log("La raza se encuentra en el arreglo")
}else{
    // hay que meterlo
    razasDePerro.push("Chihuahua");
    console.log("Se agrego la raza");
}
/**
 * findIndex
 * es similar, pero en lugar de regrsar el elemento devuelve su indice  
 */
const indiceDeChihuahua = razasDePerro.findIdex((raza, indice, arregloOriginal) => raza === "chihuahua")
    if(indiceDeChihuahua > -1){
        // resultado esperado porque si esta
        console.log(razasDePerro[indiceDeChihuahua])
        razasDePerro[indiceDeChihuahua] += "(Raza de perro pequeña)"
        // resultado esperado 
        // chihuahua (Raza de perros pequeña)
        console.log(razasDePerroEnMayusculas[indiceDeChihuahua])
    }
