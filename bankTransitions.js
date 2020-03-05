const user = [
    {
        name: 'Mariana',
        transactions:[],
        balance: 0,
    }
]

function createTransaction(person){

    for(let i=0; i < person; i++){
        let itemTransactions = person[i].transactions
        
        itemTransactions.push({typeTransit: 'debit', value: 50.5})

        if (itemTransactions[0].typeTransit === 'credit'){
            person[0].balance = itemTransactions[0].value + person[0].balance
            console.log(`YOU CREDITED U$${itemTransactions[0].value} IN YOUR ACCOUNT. YOUR BALANCE --> U$${person[0].balance}.`)

        } else if(itemTransactions[0].typeTransit === 'debit'){
            person[0].balance = itemTransactions[0].value - person[0].balance
            console.log(`YOU DEBITED U$${itemTransactions[0].value} IN YOUR ACCOUNT. YOUR BALANCE --> U$${person[0].balance}.`)

        }else{
            console.log("YOU DON'T TYPE RIGHT OR YOU DON'T SAY WHAT'S THE TYPE OF THE TRANSACTIONS!")
        }
    };
};

createTransaction(user)