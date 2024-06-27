const botaoAbrirChamado = document.querySelector('.custom-button'); // Seleciona o botão
const formularioChamado = document.querySelector('.formulario-de-chamado');

botaoAbrirChamado.addEventListener('click', () => {
    if (formularioChamado.style.display === 'block') {
        formularioChamado.style.display = 'none';
        return;
    } else {
        formularioChamado.style.display = 'block';
    }
});