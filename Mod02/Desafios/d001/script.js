//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const dia = false;
if(!dia) {
  console.log("Está claro");
}else{
  console.log("Está de noite");
}

//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
function apenasNumerosPares(){
  for(let i = 0; i <= 20; i++){
   const numPar = i % 2 === 0;
   if(numPar){
    console.log(i)
   }
  }
}
apenasNumerosPares();

//03 - crie uma função que exiba uma mensagem no console
function mensagem(){
  console.log("Ola, mundo!")
}

//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function Exibirnome(nome){
  console.log(`Meu nome e ${nome}`)
}
let meuNome = "Jussara";
Exibirnome(meuNome)

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirInformacoes(nome, idade, estiloMusical){
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Estilo Musical: ${estiloMusical}`)
}
exibirInformacoes("Jussara", 22, "Indie");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibirFilmeEMusica(filme, musica){
  console.log(`Filme: ${filme}`);
  console.log(`Musica: ${musica}`)
}
exibirFilmeEMusica("O castelo animado", "505");

//07- crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero){
  return numero * 3
}
let num = 2
let res = triplo(num);
console.log(`O triplo de ${num} e ${res}`);

//08 - crie uma função que  verifique se uma  variável é true ou false
let idade = 16

function menorIdade(idade){
  if(idade < 16){
    return true
  }else{
    return false
  }
}
menorIdade(idade);

//09 - Crie um array que receba 5 itens e exiba no console.
let arrItens = ['item1', 'item2', 'item3', 'item4', 'item5']
console.log(arrItens)

//10 - Utilize um método para adicionar um nome ao inicio do array.
let novoItem = 'item6'
arrItens.push(novoItem)

//11 - Utilize um método para remover o último nome do array.
arrItens.pop()

//12 - Utilize um método para adicionar dois nomes ao fim do array.
let novosItems = ['item7', 'item8']
arrItens.push(...novosItems);

//13 - Utilize um método para remover o primeiro nome do array. 
arrItens.shift();

//14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers)

//15 - Crie um objeto que receba ao menos três propriedades sobre você.
let meuObjeto = {
  nome: 'Jussara',
  idade: 22,
  altura: 1.63,
  peso: 42,
}
console.log(meuObjeto);

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
let novoObjeto = {
  ...meuObjeto,
  comidaFav : 'pizza'
}

console.log(novoObjeto);

//17 - Remova uma propriedade desse objeto.
delete meuObjeto.peso
console.log(meuObjeto);

//18 - Mostre no console todas as propriedades desse objeto.
for(let propriedade in meuObjeto){
  console.log(propriedade);
}

//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
  {
    nome: 'Gabriel',
    idade: 23,
    telefone: '(11) 96785-2678',
    amigos: ['Ana', 'Maria', 'Joao', 'Carlos']
  },
  {
    nome: 'Ana',
    idade: 22,
    telefone: '(81)97689-0351',
    amigos: ['Jussara', 'Gustavo', 'Fernando', 'Matheus']
  },
  {
    nome: 'Bruna',
    idade: 34,
    telefone: '(81)96929-0351',
    amigos: ['Artur', 'Vinicius', 'Fernando', 'Matheus']
  },
  {
    nome: 'Nicolas',
    idade: 20,
    telefone: '(81)99219-0021',
    amigos: ['Carla', 'Mario', 'Jose', 'Douglas']
  },
  {
    nome: 'Murilo',
    idade: 28,
    telefone: '(81)92233-0217',
    amigos: ['Hudoson', 'Joana', 'Maria', 'Yuri']
  },

];

//20 - Mostre no console o nome de um amigo de cada lista.
for (let amigo of cadastro){
  console.log(`${amigo.nome} tem o amigo ${pessoa.amigos[0]}`)
}