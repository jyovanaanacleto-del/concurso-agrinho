// Aguarda o carregamento do documento HTML antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

    // 1. Alternador de Modo Escuro (Funcionalidade de Usabilidade Avançada)
    const toggleButton = document.getElementById('toggle-theme');
    
    toggleButton.addEventListener('click', () => {
        // Altera a classe do corpo da página para inverter as variáveis de cores CSS
        document.body.classList.toggle('dark-mode');
    });

    // 2. Processamento do Formulário e Manipulação Dinâmica do DOM
    const calcForm = document.getElementById('calc-form');
    const resultBox = document.getElementById('result-box');
    const resultUser = document.getElementById('result-user');
    const resultText = document.getElementById('result-text');

    calcForm.addEventListener('submit', (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura e armazenamento de dados utilizando variáveis
        const userName = document.getElementById('username').value;
        const hectares = parseFloat(document.getElementById('hectares').value);

        // Processamento lógico da informação coletada
        // Regra fictícia: cada hectare tecnológico preserva o equivalente ecológico de 15 árvores
        const arvoresPreservadas = hectares * 15;

        // Manipulação funcional do DOM alterando textos de elementos específicos
        resultUser.textContent = `Olá, ${userName}!`;
        resultText.textContent = `Com um manejo focado no equilíbrio ecológico em seus ${hectares} hectares, estima-se o impacto positivo equivalente à preservação de até ${arvoresPreservadas} árvores nativas na região. Parabéns pelo foco em um futuro sustentável!`;

        // Altera a visibilidade da Div removendo a classe hidden
        resultBox.classList.remove('hidden');
    });
});
