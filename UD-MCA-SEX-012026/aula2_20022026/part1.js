let frutas = [
  'Maçã',       
  'abobora',    
  'Laranja',    
  'Uva',        
  'Manga',      
  'Abacaxi',    
  'Melancia',   
  'Morango',    
  'Pera',       
  'melão',       
  'Cereja',     
  'Coco',       
  'Goiaba',    
  'Mamão',      
  'Limão',     
  'Amora',      
  'Framboesa',  
  'Abacate',   
  'Figo',       
  'Maracujá'        
];

//Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log('  Qual fruta esta nessas posições? =');
console.log('Posição 0:', frutas[0]);
console.log('Posição 7:', frutas[7]);
console.log('Posição 11:', frutas[11]);
console.log('Posição 15:', frutas[15]);
console.log('Posição 18:', frutas[18]);
console.log('Posição 20:', frutas[20]); 

//Qual elemento está na penúltima e última posição?
console.log('  Qual fruta estana penúltima e última posição? =');
console.log('Penúltima posição:', frutas[frutas.length - 2]);
console.log('Última posição:', frutas[frutas.length - 1]);

//Quantos elementos existem no array?
console.log('\n Total de elementos');
console.log('Quantidade de elementos:', frutas.length);

//Adicione um novo elemento ao final do array.
frutas.push('Pitaya');
console.log('\n Após adicionar "Pitaya" ao final ');
console.log('Novo último elemento:', frutas[frutas.length - 1]);
console.log('Nova quantidade de elementos:', frutas.length);

//Imprima todos os elementos usando um for.
console.log('\n Todos os elementos do array ');
for (let i = 0; i < frutas.length; i++) {
  console.log(`Posição ${i}: ${frutas[i]}`);
}
