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


}