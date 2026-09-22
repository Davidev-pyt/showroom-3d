// 1. CAPTURA OS BOTÕES DO HTML
const btnAzul = document.getElementById('btn-azul');
const btnPreto = document.getElementById('btn-preto');
const btnBranco = document.getElementById('btn-branco');

// 2. CAPTURA AS TRÊS IMAGENS VALIDADAS DO HTML
const imgAzul = document.getElementById('bmw-azul');
const imgPreto = document.getElementById('bmw-preto');
const imgBranco = document.getElementById('bmw-branco');

// 3. FUNÇÃO AUXILIAR PARA ESCONDER TODAS AS IMAGENS PRIMEIRO
function esconderTodas() {
    imgAzul.classList.add('hidden');
    imgPreto.classList.add('hidden');
    imgBranco.classList.add('hidden');
}

// 4. EVENTOS DE CLIQUE MUDANDO A VISIBILIDADE EM TEMPO REAL
btnAzul.addEventListener('click', function() {
    esconderTodas();
    imgAzul.classList.remove('hidden'); // Mostra o azul!
    console.log("Visibilidade atualizada: Exibindo carro-azul.png");
});

btnPreto.addEventListener('click', function() {
    esconderTodas();
    imgPreto.classList.remove('hidden'); // Mostra o preto!
    console.log("Visibilidade atualizada: Exibindo carro-preto.png");
});

btnBranco.addEventListener('click', function() {
    esconderTodas();
    imgBranco.classList.remove('hidden'); // Mostra o branco!
    console.log("Visibilidade atualizada: Exibindo carro-branco.png");
});
