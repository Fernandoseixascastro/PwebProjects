class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        this.clientes = this.clientes.filter(cliente => cliente.cpf !== cpf);
    }
    pesquisar(cpf) {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
