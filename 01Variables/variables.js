// manejo de variables en js es6
// var
// let
// const
if(true){
    // se declara por primera vez x

    // var x = "x";
    // const x = "x";
    let x = "x";

    //se imprime el valor de la variable x
    //este contendra el caracter
    console.log(x);
}
// la variable x, sigue existiendo  y conserva su valor
// la variable "x" ya no existe ya que pertenece al bloque de las llaves del if
console.log(x);
// la variable se declaro con el valor "y"
//  como la x es constante la linea siguiebte provoca un error Typerror por lo tanto el tipo de variable deveria ser let 

// var x = "y";
// const x = "y";
x = "y";

// la variable "x" ahora vale "y"
console.log(x);
x = "z";
// ahora la variable vale "z" 
console.log(x);