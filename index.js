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
    return this.nome + " " + this.salario;
}


}

const usuario1 = new Usuario("leonardo", "24/1/60","m", "rua matriz do Carmo n:80", 964781000, "aha@gmail.com", "hyt0915");

console.log(usuario1);