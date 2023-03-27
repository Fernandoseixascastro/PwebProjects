class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, dependentes = []) {
        super(nome, cpf, conta);
        this.dependentes = dependentes;
    }
    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(dependente) {
        const index = this.dependentes.indexOf((dependente));
        if (index >= 0) {
            this.dependentes.splice(index, 1);
        }
    }
}
