function ex01(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Erro';
    }

    return Number(num1) + Number(num2);
}

function ex02(valorHora, horas) {
    if (isNaN(valorHora) || isNaN(horas) || valorHora < 0 || horas < 0) {
        return 'Erro';
    }

    return valorHora * horas;
}

function ex03(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5) {
    if (isNaN(pessoa1) || isNaN(pessoa2) || isNaN(pessoa3) || isNaN(pessoa4) || isNaN(pessoa5)) {
        return 'Erro';
    } else if (pessoa1 < 0 || pessoa2 < 0 || pessoa3 < 0 || pessoa4 < 0 || pessoa5 < 0) {
        return 'Erro'
    }

    return (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5;
}

function ex04(temp) {
    if (isNaN(temp)) {
        return 'Erro';
    }

    return Number(((9*temp + 160)/5).toFixed(1));
}

function ex05(milhas) {
    if (isNaN(milhas) || milhas < 0) {
        return 'Erro';
    }

    return Number((milhas * 1.60934).toFixed(2));
}

function ex06(sec) {
    if (isNaN(sec) || sec < 0) {
        return 'Erro';
    }

    let object = new Object();

    const minutes = Number((sec / 60).toFixed(2));
    const hours = Number((minutes / 60).toFixed(2));
    
    object = {
        horas: hours,
        minutos: minutes,
        segundos: sec
    }

    return object;
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