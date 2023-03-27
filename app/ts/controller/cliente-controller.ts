class ClienteController{

    private nome: HTMLInputElement;
    private cpf: HTMLInputElement;
    private numeroConta: HTMLInputElement;
    private clientes: Clientes;
    
    constructor() {
        this.nome =
        <HTMLInputElement>document.querySelector("#nome");
         this.cpf =
        <HTMLInputElement>document.querySelector("#CPF");
         this.numeroConta =
        <HTMLInputElement>document.querySelector("#numConta");
        this.clientes = new Clientes();
    }
    
    public inserirCliente(evento: Event) {
        evento.preventDefault();
        const conta = new Conta(this.numeroConta.value);
        const cliente = new Cliente(this.nome.value,this.cpf.value, conta)
        this.clientes.inserir(cliente);
        this.inserirClienteNoHTML(cliente);

    }
    
    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                event.preventDefault();
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    

}
      