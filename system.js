//Sleep criado para usar no projeto.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Transforma o botão de um formlário para comunicar erros ao usuário.
//Parâmetros
////idBotao: string do ID da div do botão.
////textoAlerta: string do que vai aparecer no botão.
async function alertFormularioBotao(idBotao,textoAlerta){
        //pega as informações necessárias para executar
        let botao = document.getElementById(idBotao);
        let textoOriginalBotao = botao.value;
        let corOriginalBotao = botao.style.backgroundColor;
        //altera botão para alerta
        botao.style.backgroundColor = "rgb(194, 78, 78)";
        botao.innerText = textoAlerta;
        //chama a função que dá um sleep
        await sleep(1 * 3000);
        //volta ao estado original
        botao.style.backgroundColor = corOriginalBotao;
        botao.innerText = textoOriginalBotao;
}

export{
    sleep,
    alertFormularioBotao
}