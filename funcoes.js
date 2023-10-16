function Compras (item, qtde, valorUnidade){
    this.item = item;
    this.qtde = qtde;
    this.valorUnidade = valorUnidade;

    this.valorTotal = function(valorUnidade){
        this.valorTotal += valorUnidade;
        return this.valorTotal;
    }


}

module.exports = {
    Compras
}