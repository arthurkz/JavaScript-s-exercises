const users = [
    {
        name: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        receitas: [24.6, 214.3, 45.3, 33.2],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9, 250]
    },
];

function somaReceita(person){

    for(let i = 0; i < person.length; i++){
        const user = person[i].receitas

        soma = 0
        for(let x = 0; x < user.length; x++){
            soma = soma + user[x]
        };

        person[i].totReceita = soma
    };
}

function somaDespesas(person){
    for(let i = 0; i < person.length; i++){
        const user = person[i].despesas

        soma = 0
        for(let x = 0; x < user.length; x++){
            soma = soma + user[x]
        };

        person[i].totDespesa = soma
    };
}

function saldo(user){
    somaDespesas(user);
    somaReceita(user);

    somaSaldo = 0
    for(let i = 0; i < user.length; i++){
        somaSaldo = user[i].totReceita - user[i].totDespesa

        user[i].totSaldo = somaSaldo

        if(user[i].totSaldo > 0){
            console.log(`${user[i].name} = R$${user[i].totSaldo} --> SEU SALDO ESTÁ POSITIVO `)
        } else if(user[i].totSaldo === 0){
            console.log(`${user[i].name} = R$${user[i].totSaldo} --> NÃO POSSUI SALDO `)
        }else{
            console.log(`${user[i].name} = R$${user[i].totSaldo} --> SEU SALDO ESTÁ NEGATIVO `)
        };

    };  
};

saldo(users);

