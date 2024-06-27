const botaoAbrirChamado = document.querySelector('.custom-button');
const formularioChamado = document.querySelector('.formulario-de-chamado');
const chamadosAbertos = document.querySelector('.chamados-abertos');
const meusChamados = document.querySelector('.meus-chamados');
const listaChamados = document.querySelector('.listagem');

botaoAbrirChamado.addEventListener('click', () => {
    if (formularioChamado.style.display === 'block') {
        formularioChamado.style.display = 'none';
        chamadosAbertos.style.display = 'block';
        return;
    } else {
        formularioChamado.style.display = 'block';
        chamadosAbertos.style.display = 'none';
    }
});

meusChamados.addEventListener('click', () => {
    if (listaChamados.style.display === 'none') {
        listaChamados.style.display = 'block';
        return;
    } else {
        listaChamados.style.display = 'none';
    }
});