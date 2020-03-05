// Calcula o indice de massa corporal (IMC)

const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura*altura)

 
if (imc >= 30){
    console.log(`${nome} você está acima do peso.`)
} else if (imc < 29.9) {
    console.log(`${nome} você NÃO está acima do peso.`)
}

