let contaController = new ContaController();
contaController.listar();
const clientes = new Clientes;
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
const cliente1 = new Cliente('Gustavo', "123-456-789.21", new Conta('2', 200));
const cliente2 = new Cliente('Ronaldo', "223-456-222.21", new Conta('1', 100));
clientes.inserir(cliente2);
clientes.inserir(cliente1);
console.log(clientes);
clientes.pesquisar("123-456-789.21"); // Pesquisando cliente pelo cpf ("123-456-789.21")
clientes.listar();
clientes.remover("123-456-789.21"); // cpf cliente 1 ("123-456-789.21")
console.log(clientes);
