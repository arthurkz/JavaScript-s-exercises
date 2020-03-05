// Calcular a aposentadoria de um usuário

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 40;

const aposentar = idade + contribuicao;

if ((aposentar >= 95) && (idade >= 35) && (sexo === 'M')){
    console.log(`${nome}, você pode se aposentar!`);
} else if ((aposentar >= 85) && (idade >= 30) && (sexo === 'F')){
    console.log(`${nome}, você pode se aposentar!`);
} else{
    console.log(`${nome}, você ainda NÃO pode se aposentar!`);
}

