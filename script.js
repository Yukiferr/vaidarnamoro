    const botaoNao = document.getElementById('nao');
    let movido = false;
    let posicaoAtual = 0;

botaoNao.addEventListener('click', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * 900 + 'px';
    this.style.left = Math.random() * 900 + 'px';
});
