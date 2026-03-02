let produtos = [
  { nome: 'Notebook',preco:4599.90, estoque: 10 },  
  { nome: 'Mouse', preco:89.90, estoque: 150 }, 
  { nome: 'Teclado',preco:199.90, estoque: 80 },  
  { nome: 'Monitor',preco:1299.00, estoque: 20 },  
  { nome: 'Headset',preco:349.90, estoque: 55 },  
  { nome: 'controle',preco:259.90, estoque: 40 },  
  { nome: 'Cadeira Gamer',preco: 1899.00, estoque: 15 },  
  { nome: 'SSD',preco:399.90, estoque: 60 },  
  { nome: 'Pen Drive',preco:49.90, estoque: 200 }, 
  { nome: 'Mousepad',preco:79.90, estoque: 120 }  
];

//  Qual é o preço do segundo objeto? 
console.log('Preço do segundo objeto :');
console.log('Preço:', `R$ ${produtos[1].preco}`);

//  Qual é o nome do terceiro objeto? 
console.log('\n Nome do terceiro objeto :');
console.log('Nome:', produtos[2].nome);


//  Quantos itens existem no array?
console.log('\n Total de itens no array :');
console.log('Quantidade de itens:', produtos.length);

//  Imprima o nome de todos os objetos.
console.log('\n Nome de todos os produtos :');
for (let i = 0; i < produtos.length; i++) {
  console.log(`${i + 1}. ${produtos[i].nome}`);
}

//  Some o total de estoque de todos os objetos.
console.log('\n Total de estoque ');
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}
console.log('Estoque total e de:', totalEstoque, 'unidades');

//  Qual objeto possui maior estoque?
console.log('\nProduto com maior estoque :');
let maiorEstoque = produtos[0]; 

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}

console.log('Produto:', maiorEstoque.nome + ' com estoque de ' + maiorEstoque.estoque + ' unidades');

