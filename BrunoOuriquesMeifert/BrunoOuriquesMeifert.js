const dados = require('./dados.json');



function empregados(id, cargo, salarioatt){
    this.id = id;
    this.cargo = cargo;
    this.salarioatt = salarioatt;
}

    const empregado01 = new empregados(dados._id==1, dados.cargo, dados.salario);


console.log(empregado01);


/* não consegui manipular o json */