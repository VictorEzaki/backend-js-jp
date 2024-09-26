function ex01(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Erro';
    }

    return Number(num1) + Number(num2);
}

function ex02(valorHora, horas) {
    return valorHora * horas;
}

function ex03(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5) {
    return (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5;
}

function ex04(temp) {
    return (9*temp + 160)/5;
}

function ex05(milhas) {
    return (milhas * 1.60934).toFixed(2);
}

function ex06(sec) {
    const minutes = Number((sec / 60).toFixed(2));
    const hours = Number((minutes / 60).toFixed(2));

    
    let array = [
        hours,
        minutes
    ];

    return array;
}

function ex07(km) {
    const metros = Number((km * 1000).toFixed(2));
    const cent = Number((metros * 100).toFixed(2));

    let array = [
        metros,
        cent
    ]

    return array;
}

function ex08(num) {
    let tabuada = [];

    for (let i = 0; i <= 11; i++) {
        tabuada[i] = num * i;
    }

    return tabuada;
}

function desafio01(idade) {
    const meses = idade * 12;
    let dias = 0;
    const ano = 2024-idade;

    for (let i = ano; i < 2024; i++) {
        if ((i + 1) % 4 === 0) {
            dias += 366;
        } else {
            dias += 365;
        }
    }
    
    let array = [
        meses,
        dias
    ];

    return array;
}

function desafio02(a, b) {
    let c = b;
    b = a;
    a = c;

    let depois = [ a, b ];

    return depois;
}

function desafio03(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function ex09(nota1, nota2, nota3) {
    var aluno = new Object();

    aluno.media = ( nota1 + nota2 + nota3 ) / 3;

    if (aluno.media >= 7) {
        aluno.situacao = "Aprovado";
    } else if (aluno.media >= 5) {
        aluno.situacao = "Recuperação";
    } else{
        aluno.situacao = "Reprovado";
    }

    return aluno;
}

// module.exports = somar { para exportar somente uma função }
module.exports = { ex01, ex02, ex03, ex04, ex05, ex06, ex07, ex08, desafio01, desafio02, desafio03, ex09 }