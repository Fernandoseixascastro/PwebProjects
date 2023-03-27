class Cliente{

    private _nome : string;
    private _cpf : string;
    private _conta : Conta;
  


    constructor (nome: string, cpf : string, conta : Conta){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }


    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get conta() {
        return this._conta;
    }

    toString(): string {
        return `Número: ${this._nome} 
        - Saldo: ${this._cpf} 
        - Conta: ${this._conta}`;
    }

    

   
   // /2.1 inserir, que recebe um parâmetro do tipo Cliente inserirá um cliente no array de clientes da classe Clientes

    
//2.2 remover, que recebe um cpf e removerá o cliente daquele cpf, se existir
//2.3 listar, que devolverá um array de Cliente
//2.4 pesquisar, que receberá o cpf do cliente e devolverá o cliente encontrado (se encontrar)


}

