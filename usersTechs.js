const users = [
    {
        name: 'Carlos',
        techs: [
            'HTML','CSS'
        ]
    },
    {
        name: 'Jasmine',
        techs: [
            'JavaScript','CSS'
        ]
    },
    {
        name: 'Tuane',
        techs: [
            'HTML','Node.js'
        ]
    }
]

function searchForUsersCSS(user){
    for(let i = 0; i < user.length; i++){
        let objectTechs = user[i].techs

        user[i].workCSS = false

        for (let x = 0; x < objectTechs.length; x++){
            if (objectTechs[x] === 'CSS'){
                user[i].workCSS = true 
            }; 
        };
    }; 
};

function workWithCSS(program){

    searchForUsersCSS(program)

    for (let i = 0; i < program.length; i++ ){  

        if(program[i].workCSS){
            console.log(`NOME: ${program[i].name} ---> TRABALHA COM CSS!`);
        } else{
            console.log(`NOME: ${program[i].name} ---> "NÃO" TRABALHA COM CSS!`);
        };
    }
};

workWithCSS(users);