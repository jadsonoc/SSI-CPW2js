
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
    let arrNames = ( Array.isArray(people) ) ? people : [];
    /*if ( people.length === 0 ) {
        alert("Por favor, insira 3 nomes!");
        arrNames.push( prompt("Digite o primeiro nome: ") );
        arrNames.push( prompt("Digite o segundo nome: ") );
        arrNames.push( prompt("Digite o terceiro nome: ") );
    }*/
	arrNames.reverse();
    return arrNames;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    let arrGrades = ( Array.isArray(grades) ) ? grades : [];
    let fltMean = 0.0;
    let intGrades = 0;
    /*
    let strName = "O Aluno";
    if ( arrGrades.length === 0 ) {
        strName = prompt( "Informe o nome de um aluno: " );
        arrGrades.push( prompt("Digite a primeira nota: ") );
        arrGrades.push( prompt("Digite a segunda nota: ") );
        arrGrades.push( prompt("Digite a terceira nota: ") );
    }*/
    intGrades = arrGrades.length;
    for ( let i = 0; i < intGrades; i++ ) {
        fltMean += arrGrades[i];
    }
    fltMean /= intGrades;
    //return strName + " foi " + isApproved( fltMean ) + " com a média: " + parseFloat( fltMean );
    return fltMean;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    return ( mean >= 7.0 ) ? "aprovado" : "reprovado";
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
 function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.
    let strFullDate = "";

    if ( strDate !== "" && ( ( /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(strDate) ) 
                        || ( /^(\d{2})\/(\d{2})\/(\d{2})$/.exec(strDate) ) ) ) {
        const monthNamesPT_BR = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
                                 "agosto", "setembro", "outubro", "novembro", "dezembro"];
        
        let arrDate = strDate.split("/");
        let strDay = arrDate[0];
        let intMonth = arrDate[1];
        let strYear = arrDate[2];
        strFullDate = strDay + " de " + monthNamesPT_BR[intMonth-1] + " de " + strYear;
    } 
    return strFullDate; 
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}