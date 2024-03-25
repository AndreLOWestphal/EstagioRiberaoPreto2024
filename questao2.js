let arr = [0,1];
let arrLength = 6;
let num1; 
let num2;
let numDigitado = 8;
let resultado;
let encontrado = false;

for(let i = 0; i <= arrLength; i++){
    num1 = arr[i]
    num2 = arr[++i]
    if(num1 <= 0){
        num1 = 0
    } if(num2 <= 0){
        num2 = 1
    let soma = num1 + num2;
    arr.push(soma)
    } else {
        
    let soma = num1 + num2;
    arr.push(soma);
    i--;    
    }
}

for(let i = 0; i <= arr.length; i++){
    if(!encontrado){
        if(arr[i] == numDigitado){
            encontrado = true;
            resultado = `O número escolhido, ${numDigitado}, faz parte da sequência de Fibonacci!`
        }else {
            encontrado = false;
            resultado = `O número escolhido, ${numDigitado}, NÃO faz parte da sequência de Fibonacci!`
        }
    }
    }

console.log(arr);
console.log(resultado)

