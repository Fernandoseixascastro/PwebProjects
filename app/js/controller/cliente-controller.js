class ClienteController {
    constructor() {
        this.nome =
            document.querySelector("#nome");
        this.cpf =
            document.querySelector("#CPF");
        this.numeroConta =
            document.querySelector("#numConta");
        this.clientes = new Clientes();
    }
    inserirCliente(evento) {
        evento.preventDefault();
        const conta = new Conta(this.numeroConta.value);
        const cliente = new Cliente(this.nome.value, this.cpf.value, conta);
        this.clientes.inserir(cliente);
        this.inserirClienteNoHTML(cliente);
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
}
