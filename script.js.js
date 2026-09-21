// 1. CAPTURA OS ELEMENTOS DA VITRINE
const elemento_imagem = document.getElementById('bmw-imagem');
const botao_azul = document.getElementById('btn-azul');
const botao_preto = document.getElementById('btn-preto');
const botao_branco = document.getElementById('btn-branco');

//ARQUIVOS LOCAIS OFFLINE!
const foto_azul = "carro-azul.png";
const foto_preta = "carro-preto.png";
const foto_branca = "carro-branco.png";

// 2. EVENTOS DE CLIQUE PARA TROCA DE COR INSTANTÂNEA
botao_azul.addEventListener('click', function() {
    elemento_imagem.src = foto_azul;
    console.log("Lataria atualizada: Azul M Sport.");
});

botao_preto.addEventListener('click', function() {
    elemento_imagem.src = foto_preta;
    console.log("Lataria atualizada: Preto Sapphire.");
});

// Certifique-se de que a função fecha corretamente com as chaves!
botao_branco.addEventListener('click', function() {
    elemento_imagem.src = foto_branca;
    console.log("Lataria updated: Branco Alpine.");
});
