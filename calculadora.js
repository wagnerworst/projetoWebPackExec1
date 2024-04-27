function dividirDoisNunmeros(dividendo, divisor)
{
    if (divisor === 0)
    {
        return "OPERAÇÃO INVÁLIDA";
    }
    else
    {
        let resultado = dividendo/divisor;
        return resultado <0 ? "OPERAÇÃO INVÁLIDA" : resultado.toFixed(1);
    }
}

export{
    dividirDoisNunmeros
}