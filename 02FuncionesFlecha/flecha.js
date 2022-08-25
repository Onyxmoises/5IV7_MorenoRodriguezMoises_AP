// una funcion flecha a comparacion de una normal no genera su propio contexto(this) necesita declararse antes de usarla
// hagamos una funcion simple que devuelva una suuma de dos numeros
function sumaFuncionNormal(n1, n2){
    return n1 + n2;
}
console.log(`sumaFuncionNormal(3, 4): ${sumaFuncionNormal(3,4)}`);
// este es el equvalente como funcion flecha
const sumaFuncionFlecha = (n1, n2) => n1 + n2;
console.log(`sumaFuncionFlecha(3, 4): ${sumaFuncionFlecha(3,4)}`);
// otra forma de flecha
const sumaFuncionFlecha1 = (n1, n2) => {
    return n1 + n2;
}
console.log(`sumaFuncionFlecha1(5, 6): ${sumaFuncionFlecha1(5,6)}`);
// si queremos devolver un objeto en una linea con una funcion flecha debemos envolverlo primero entre parantesis
const sumaFuncionFlecha2 = (n1, n2) => ({
    resultado : n1 + n2
});
console.log(`sumaFuncionFlecha2(6, 7): ${sumaFuncionFlecha2(6,7)}`);
// Cuando la funcion flecha tiene un solo parametro no es necesario envolverlo entre parentesis
const cuadradoFuncionFlecha = n1 => n1**2
console.log(`cuadradoFuncionFlecha(7): ${cuadradoFuncionFlecha(7)}`);