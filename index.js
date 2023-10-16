const { Compras } = require("./funcoes");

class Pessoa{
    constructor (nome, dn, genero,  end, cel ){
        this.nome = nome;
        this.dn = dn;
        this.genero = genero;
        this.end = end;
        this.cel = cel;   
    }
}

class Usuario extends Pessoa{
    constructor (nome, dn, genero,  end, cel, email, senha){
        super(nome, dn, genero, end, cel);
        this.email = email;
        this.senha = senha; 
}

infos = function(){
    return this.nome + " " + this.email;
}


}


class Comprador extends Pessoa{
    constructor (nome, dn, genero,  end, cel, email, senha, compras){
        super(nome, dn, genero, end, cel);
        this.email = email;
        this.senha = senha; 
        this.compras = compras;
}

infos = function(){
    return this.nome + " " + this.compras;
}
}

let usuario = [];

usuario[0] = new Usuario("leonardo", "24/1/60","m", "rua matriz do Carmo n:80", 964781000, "aha@gmail.com", "hyt0915");

usuario[2] = new Comprador ("maria", "4/11/2006","f", "rua do Carmo n:102", 964347810, "maria@gmail.com", "gusnb23", 1);

console.log(usuario);

const compras = new Compras("mesa" , 2, 100);

console.log("valor total:");
console.log(compras.valorTotal(2, 100));