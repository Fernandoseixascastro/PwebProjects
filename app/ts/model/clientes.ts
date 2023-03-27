class Clientes {

     private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();

    }

    inserir(cliente: Cliente): void {
         this.clientes.push(cliente);
    }

    remover(cpf: string): void {
       this.clientes = this.clientes.filter(cliente => cliente.cpf !== cpf)
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            (           cliente: { cpf: string; }) => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}
