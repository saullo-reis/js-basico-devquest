console.log('Os números são 6 e 3!')
function somar(numero1, numero2){
    let soma = numero1 + numero2;
    return 'A soma dos dois números é: ' + soma;   
}
let resultadoSoma = somar(6,3)
console.log(resultadoSoma)


function multiplicar(numero1,numero2){
    let multiplicacao = numero1 * numero2;
    return 'A multiplicação dos dois números é: '+ multiplicacao
}
let resultadoMultiplicacao = multiplicar(6,3)
console.log(resultadoMultiplicacao)

function dividir(numero1,numero2){
    let divisao = numero1/numero2
    return 'A divisão desses numeros é: '+divisao
}
let resultadoDivisao = dividir(6,3)
console.log(resultadoDivisao)

function subtrair(numero1, numero2){
    let subtracao = numero1-numero2
    return 'A subtração desses números é: '+subtracao
}
let resultadoSubtracao = subtrair(6,3)
console.log(resultadoSubtracao)