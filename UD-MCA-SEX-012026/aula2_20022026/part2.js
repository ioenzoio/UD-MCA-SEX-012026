let produto = {
  nome: 'Notebook Gamer',
  cor: 'Preto e Vermelho',
  preco: 8000.0,
  estoque: 10
};

//Como acessar o nome do objeto?
console.log('nome do produto :');
console.log('Nome:', produto.nome);

//Como acessar o preço usando colchetes?
console.log('\n  o preço do produto :');
console.log('Preço: R$', produto['preco']);

// Atualize o estoque para 80.
console.log('\n seu estoque ' + produto.estoque);
produto.estoque = 80;
console.log('Seu novo estoque:', produto.estoque);

//Imprima todas as propriedades no console.
console.log('\n suas propriedades  ');
console.log('Nome:', produto.nome);
console.log('Cor:', produto.cor);
console.log('Preço: R$:', produto.preco);
console.log('Estoque:', produto.estoque);
