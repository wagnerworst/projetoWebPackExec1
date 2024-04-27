require("./index.css");
import { concatenarDuasStrings } from './gerenciaDeNomes';
import { dividirDoisNunmeros } from './calculadora';
import { alertFormularioBotao } from './system'

//Adiciona eventos aos botões.
document.getElementById("botaoConcatenar").addEventListener("click", executarConcatenacao);
document.getElementById("botaoDividir").addEventListener("click", executarDivisao);

//Funções de Entrada dos botões
function executarConcatenacao(){
    let stringUm = document.getElementById("palavraUm").value;
    let stringDois = document.getElementById("palavraDois").value;
    let resultadoConcatenar = document.getElementById("resultadoConcatenar")

    let stringsConcatenadas = concatenarDuasStrings(stringUm,stringDois)
    resultadoConcatenar.innerText = stringsConcatenadas;
}

async function executarDivisao(){
    let dividendo = Number(document.getElementById("dividendo").value);
    let divisor = Number(document.getElementById("divisor").value);
    let resultadoDividir = document.getElementById("resultadoDividir")
    if (divisor <= 0 || dividendo<0)
    {
        resultadoDividir.innerText = 0;
        alertFormularioBotao("botaoDividir","Operação Inválida");
    }
    else
    {
        let produtoDivisao = dividirDoisNunmeros(dividendo,divisor)
        resultadoDividir.innerText = produtoDivisao;
    }
}