function Compras (item, qtde, valorUnidade){
    this.item = item;
    this.qtde = qtde;
    this.valorUnidade = valorUnidade;

    this.valorTotal = function(qtde, valorUnidade){
        this.valorTotal = qtde * valorUnidade;
        return this.valorTotal;
    }


}

module.exports = {
    Compras
}