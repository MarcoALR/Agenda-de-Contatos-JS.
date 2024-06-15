// Array para armazenar os contatos
let contatos = [];
// Variável para armazenar o índice do contato atualmente selecionado
let contatoAtual = -1;

// Função para iniciar a inclusão de um novo contato
function incluirContato() {
    // Habilita os campos de entrada
    habilitarInputs(true);
    // Limpa os campos de entrada
    limparInputs();
    // Habilita os botões Salvar e Cancelar
    document.getElementById('salvar').disabled = false;
    // Desabilita o botão Incluir
    document.getElementById('cancelar').disabled = false;
    // Desabilita o botão Incluir
    document.getElementById('incluir').disabled = true;
}

// Função para salvar o contato na array
function salvarContato() {
    // Obtém os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;

    // Cria um objeto contato com os valores obtidos
    const contato = { nome, sobrenome, endereco, telefone };

    // Verifica se é um novo contato ou edição de um existente
    if (contatoAtual === -1) {
        // Adiciona o novo contato à array
        contatos.push(contato);
    } else {
        // Atualiza o contato existente na array
        contatos[contatoAtual] = contato;
        // Reseta o índice do contato atual
        contatoAtual = -1;
    }

    // Limpa os campos de entrada
    limparInputs();
    // Desabilita os campos de entrada
    habilitarInputs(false);
    // Reseta os botões para o estado inicial
    resetBotoes();
}

// Função para cancelar a inclusão ou edição do contato
function cancelar() {
    // Limpa os campos de entrada
    limparInputs();
    // Desabilita os campos de entrada
    habilitarInputs(false);
    // Reseta os botões para o estado inicial
    resetBotoes();
}

// Função para iniciar a edição de um contato
function editarContato() {
    // Habilita os campos de entrada
    habilitarInputs(true);
    // Habilita os botões Salvar e Cancelar
    document.getElementById('salvar').disabled = false;
    document.getElementById('cancelar').disabled = false;
    // Desabilita os botões Editar e Excluir
    document.getElementById('editar').disabled = true;
    document.getElementById('excluir').disabled = true;
}

// Função para excluir um contato
function excluirContato() {
    // Verifica se há um contato selecionado
    if (contatoAtual > -1) {
        // Remove o contato da array
        contatos.splice(contatoAtual, 1);
        // Limpa os campos de entrada
        limparInputs();
        // Reseta os botões para o estado inicial
        resetBotoes();
    }
}

// Função para mostrar o primeiro contato da array
function primeiroContato() {
    // Verifica se há contatos na array
    if (contatos.length > 0) {
        // Define o índice do contato atual como o primeiro contato
        contatoAtual = 0;
        // Mostra o contato atual nos campos de entrada
        mostrarContato();
    }
}

// Função para mostrar o contato anterior da array
function anteriorContato() {
    // Verifica se o índice do contato atual é maior que 0
    if (contatoAtual > 0) {
        // Decrementa o índice do contato atual
        contatoAtual--;
        // Mostra o contato atual nos campos de entrada
        mostrarContato();
    }
}

// Função para mostrar o próximo contato da array
function proximoContato() {
    // Verifica se o índice do contato atual é menor que o último índice da array
    if (contatoAtual < contatos.length - 1) {
        // Incrementa o índice do contato atual
        contatoAtual++;
        // Mostra o contato atual nos campos de entrada
        mostrarContato();
    }
}

// Função para mostrar o último contato da array
function ultimoContato() {
    // Verifica se há contatos na array
    if (contatos.length > 0) {
        // Define o índice do contato atual como o último contato
        contatoAtual = contatos.length - 1;
        // Mostra o contato atual nos campos de entrada
        mostrarContato();
    }
}

// Função para mostrar os dados do contato atual nos campos de entrada
function mostrarContato() {
    // Obtém o contato atual da array
    const contato = contatos[contatoAtual];
    // Define os valores dos campos de entrada com os dados do contato
    document.getElementById('nome').value = contato.nome;
    document.getElementById('sobrenome').value = contato.sobrenome;
    document.getElementById('endereco').value = contato.endereco;
    document.getElementById('telefone').value = contato.telefone;

    // Habilita os botões Editar e Excluir
    document.getElementById('editar').disabled = false;
    document.getElementById('excluir').disabled = false;
}

// Função para habilitar ou desabilitar os campos de entrada
function habilitarInputs(estado) {
    // Define o estado dos campos de entrada com base no parâmetro estado
    document.getElementById('nome').disabled = !estado;
    document.getElementById('sobrenome').disabled = !estado;
    document.getElementById('endereco').disabled = !estado;
    document.getElementById('telefone').disabled = !estado;
}

// Função para limpar os campos de entrada
function limparInputs() {
    // Define os valores dos campos de entrada como vazio
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}

// Função para resetar os botões para o estado inicial
function resetBotoes() {
    // Habilita o botão Incluir
    document.getElementById('incluir').disabled = false;
    // Desabilita os botões Salvar, Cancelar, Editar e Excluir
    document.getElementById('salvar').disabled = true;
    document.getElementById('cancelar').disabled = true;
    document.getElementById('editar').disabled = true;
    document.getElementById('excluir').disabled = true;
}