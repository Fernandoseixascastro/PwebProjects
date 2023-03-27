class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
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
    toString() {
        return `Número: ${this._nome} 
        - Saldo: ${this._cpf} 
        - Conta: ${this._conta}`;
    }
}
