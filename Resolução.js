//Kieran Santos Corrêa - 2°DSM

/*Existem diversas formas de corrigir e modificar este código.
Vou apresentar duas maneiras*/

/* 1 - É possível manter as variáveis fora da função. 
      Dependendo da finalidade do código, podemos declarar let x, y = 5 e depois acrescentar que x = x + 10
      O JavaScript não entende que apenas 'x + 10' será o novo valor de x
      No entanto, decidi declarar como let x = y + 10, já que de início x e y tem o mesmo valor
      Neste caso, elas são declaradas separadamente
      */

let y = 5;            //As variáveis x e y podem ser declaradas como let, const ou var,
let x = y + 10;       //o resultado não muda
let r = x + y; 

function somar() {     //A variável const só pode ser decladara uma única vez em todo o código e não pode ter seu valor modificado
  return r;            //A variável var também só pode ser declarada uma única vez, mas seu valor pode mudar
}                      //A variável let está sujeita ao encapsulamento (é possível criar duas variáveis com o mesmo nome, desde que elas estejam em encapsulamentos diferentes)

console.log(somar());

/* 2 - Também é possível criar a função com as variáveis dentro*/

function somar() {
  let y = 5;          //Como estas variáveis não vão mudar de valor dentro da função podemos
  let x = y + 10;     //declará-las como let
  let r = x + y;      //Caso elas não possam mudar de valor em todo o código (inclusive fora da função) é preciso declarar como const
  return r;
}

console.log(somar());



