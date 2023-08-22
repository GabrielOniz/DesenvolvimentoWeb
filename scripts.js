// Seleciona os botões principais
const indicadoresContratoButton = document.querySelector('.button');
const indicadoresAssistenciaisButton = document.querySelectorAll('.button')[1];
const indicadoresComplementaresButton = document.querySelectorAll('.button')[2];

// Seleciona o container para os botões iniciais
const buttonsContainer = document.querySelector('.buttons');

// Variáveis para controlar a visibilidade dos novos botões
let indicadoresContratoVisiveis = false;
let indicadoresAssistenciaisVisiveis = false;
let indicadoresComplementaresVisiveis = false;

// Identificadores para os três novos botões de "Indicadores de Contrato"
const novosBotoesContratoId = 'novos-botoes-contrato';
const novosBotoesAssistenciaisId = 'novos-botoes-assistenciais';
const novosBotoesComplementaresId = 'novos-botoes-complementares';

// Função para adicionar os novos botões de "Indicadores de Contrato"
function adicionarNovosBotoesContrato() {
    const novosBotoesContrato = [
        { texto: 'Qualitativo', estilo: 'button novos-button', id: novosBotoesContratoId, link: 'pages/qualitativo.html' },
        { texto: 'Quantitativo', estilo: 'button novos-button', id: novosBotoesContratoId, link: 'pages/quantitativo.html' },
        { texto: 'Monitoramento', estilo: 'button novos-button', id: novosBotoesContratoId, link: 'pages/monitoramento.html' }
    ];

    novosBotoesContrato.forEach(botao => {
        const novoBotaoElemento = document.createElement('a');
        novoBotaoElemento.textContent = botao.texto;
        novoBotaoElemento.className = botao.estilo;
        novoBotaoElemento.id = botao.id; // Definindo o identificador para os novos botões
        novoBotaoElemento.href = botao.link; // Definindo o link do botão
        buttonsContainer.appendChild(novoBotaoElemento);
    });
}

// Função para adicionar os novos botões de "Indicadores Assistenciais"
function adicionarNovosBotoesAssistenciais() {
    const novosBotoesAssistenciais = [
        { texto: 'Desenvolvimento humano', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/desenvolvimento_humano.html' },
        { texto: 'Enfermagem', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/enfermagem.html' },
        { texto: 'Farmácia', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/farmacia.html' },
        { texto: 'Odontologia', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/odontologia.html' },
        { texto: 'Saúde mental', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/saude_mental.html' },
        { texto: 'Programas, AME e SADT', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/programas_ama_sadt.html' },
        { texto: 'UBS, ESF, mistas e AMAs', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/ubs_esf_mistas_amas.html' },
        { texto: 'Urgência, emergência e HM', estilo: 'button novos-button', id: novosBotoesAssistenciaisId, link: 'pages/urgencia_emergencia_hm.html' }
    ];

    novosBotoesAssistenciais.forEach(botao => {
        const novoBotaoElemento = document.createElement('button');
        novoBotaoElemento.textContent = botao.texto;
        novoBotaoElemento.className = botao.estilo;
        novoBotaoElemento.id = botao.id; // Definindo o identificador para os novos botões
        novoBotaoElemento.addEventListener('click', function() {
            window.location.href = botao.link;
        });
        buttonsContainer.appendChild(novoBotaoElemento);
    });
}

// Função para adicionar os novos botões de "Indicadores Complementares"
function adicionarNovosBotoesComplementares() {
    const novosBotoesComplementares = [
        { texto: 'Absenteísmo', estilo: 'button novos-button', id: novosBotoesComplementaresId, link: 'https://datastudio.google.com/embed/reporting/08d32f0d-7fe5-4eb5-95cc-0eb2a3137e9a/page/p_rkolhkffuc' },
        { texto: 'De olho na fila', estilo: 'button novos-button', id: novosBotoesComplementaresId, link: 'https://deolhonafila.prefeitura.sp.gov.br/' },
        { texto: 'PCR - Saúde respiratória', estilo: 'button novos-button', id: novosBotoesComplementaresId, link: 'https://datastudio.google.com/embed/reporting/0c335c49-e942-4e6c-8d43-3fac4718c9de/page/QysiC' },
        { texto: 'Tempo de espera', estilo: 'button novos-button', id: novosBotoesComplementaresId, link: 'https://app.powerbi.com/view?r=eyJrIjoiZjkxYmViNGUtMTJiNS00NzczLWE1YTgtMGI3ZjBiNmQ0NDcwIiwidCI6ImNjNjQwYzAzLTNhYjktNGEyMC04YzM0LWJlYzlkOTU2NTBiNSJ9' }
    ];

    novosBotoesComplementares.forEach(botao => {
        const novoBotaoElemento = document.createElement('a');
        novoBotaoElemento.textContent = botao.texto;
        novoBotaoElemento.className = botao.estilo;
        novoBotaoElemento.id = botao.id; // Definindo o identificador para os novos botões
        novoBotaoElemento.href = botao.link; // Definindo o link do botão
        buttonsContainer.appendChild(novoBotaoElemento);
    });
}

// Função para remover os novos botões de "Indicadores de Contrato"
function removerNovosBotoesContrato() {
    const novosBotoesContratoElementos = document.querySelectorAll(`#${novosBotoesContratoId}`);
    novosBotoesContratoElementos.forEach(botao => {
        buttonsContainer.removeChild(botao);
    });
}

// Função para remover os novos botões de "Indicadores Assistenciais"
function removerNovosBotoesAssistenciais() {
    const novosBotoesAssistenciaisElementos = document.querySelectorAll(`#${novosBotoesAssistenciaisId}`);
    novosBotoesAssistenciaisElementos.forEach(botao => {
        buttonsContainer.removeChild(botao);
    });
}

// Função para remover os novos botões de "Indicadores Complementares"
function removerNovosBotoesComplementares() {
    const novosBotoesComplementaresElementos = document.querySelectorAll(`#${novosBotoesComplementaresId}`);
    novosBotoesComplementaresElementos.forEach(botao => {
        buttonsContainer.removeChild(botao);
    });
}

// Função para alternar a visibilidade dos novos botões de "Indicadores de Contrato"
function toggleNovosBotoesContrato() {
    if (indicadoresContratoVisiveis) {
        // Se os botões já estiverem visíveis, remove-os
        removerNovosBotoesContrato();
    } else {
        // Se os botões não estiverem visíveis, adiciona-os
        adicionarNovosBotoesContrato();
    }

    // Inverte o estado da visibilidade dos novos botões
    indicadoresContratoVisiveis = !indicadoresContratoVisiveis;

    // Oculta os botões de "Indicadores Assistenciais" e "Indicadores Complementares" se estiverem visíveis
    if (indicadoresAssistenciaisVisiveis) {
        removerNovosBotoesAssistenciais();
        indicadoresAssistenciaisVisiveis = false;
    }

    if (indicadoresComplementaresVisiveis) {
        removerNovosBotoesComplementares();
        indicadoresComplementaresVisiveis = false;
    }
}

// Função para alternar a visibilidade dos novos botões de "Indicadores Assistenciais"
function toggleNovosBotoesAssistenciais() {
    if (indicadoresAssistenciaisVisiveis) {
        // Se os botões já estiverem visíveis, remove-os
        removerNovosBotoesAssistenciais();
    } else {
        // Se os botões não estiverem visíveis, adiciona-os
        adicionarNovosBotoesAssistenciais();
    }

    // Inverte o estado da visibilidade dos novos botões
    indicadoresAssistenciaisVisiveis = !indicadoresAssistenciaisVisiveis;

    // Oculta os botões de "Indicadores de Contrato" e "Indicadores Complementares" se estiverem visíveis
    if (indicadoresContratoVisiveis) {
        removerNovosBotoesContrato();
        indicadoresContratoVisiveis = false;
    }

    if (indicadoresComplementaresVisiveis) {
        removerNovosBotoesComplementares();
        indicadoresComplementaresVisiveis = false;
    }
}

// Função para alternar a visibilidade dos novos botões de "Indicadores Complementares"
function toggleNovosBotoesComplementares() {
    if (indicadoresComplementaresVisiveis) {
        // Se os botões já estiverem visíveis, remove-os
        removerNovosBotoesComplementares();
    } else {
        // Se os botões não estiverem visíveis, adiciona-os
        adicionarNovosBotoesComplementares();
    }

    // Inverte o estado da visibilidade dos novos botões
    indicadoresComplementaresVisiveis = !indicadoresComplementaresVisiveis;

    // Oculta os botões de "Indicadores de Contrato" e "Indicadores Assistenciais" se estiverem visíveis
    if (indicadoresContratoVisiveis) {
        removerNovosBotoesContrato();
        indicadoresContratoVisiveis = false;
    }

    if (indicadoresAssistenciaisVisiveis) {
        removerNovosBotoesAssistenciais();
        indicadoresAssistenciaisVisiveis = false;
    }
}

// Adiciona os event listeners aos botões principais
indicadoresContratoButton.addEventListener('click', toggleNovosBotoesContrato);
indicadoresAssistenciaisButton.addEventListener('click', toggleNovosBotoesAssistenciais);
indicadoresComplementaresButton.addEventListener('click', toggleNovosBotoesComplementares);
