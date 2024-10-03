class ServiceExercicio {
    Ex01(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        return Number(num1) + Number(num2);
    }

    Ex02(valorHora, horas) {
        if (isNaN(valorHora) || isNaN(horas) || valorHora < 0 || horas < 0) {
            throw new Error('Informe um número válido');
        }

        return valorHora * horas;
    }

    Ex03(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5) {
        if (isNaN(pessoa1) || isNaN(pessoa2) || isNaN(pessoa3) || isNaN(pessoa4) || isNaN(pessoa5)) {
            throw new Error('Informe um número válido');
        } else if (pessoa1 < 0 || pessoa2 < 0 || pessoa3 < 0 || pessoa4 < 0 || pessoa5 < 0) {
            throw new Error('Informe um número válido');
        }

        return (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5;
    }

    Ex04(temp) {
        if (isNaN(temp)) {
            throw new Error('Informe um número válido');
        }

        return Number(((9 * temp + 160) / 5).toFixed(1));
    }

    Ex05(milhas) {
        if (isNaN(milhas) || milhas < 0) {
            throw new Error('Informe um número válido');
        }

        return Number((milhas * 1.60934).toFixed(2));
    }

    Ex06(sec) {
        if (isNaN(sec) || sec < 0) {
            throw new Error('Informe um número válido');
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

    Ex07(km) {
        if (isNaN(km) || km < 0) {
            throw new Error('Informe um número válido');
        }

        const metros = Number((km * 1000).toFixed(2));
        const cent = Number((metros * 100).toFixed(2));

        let array = [
            metros,
            cent
        ]

        return array;
    }

    Ex08(num) {
        let tabuada = [];

        for (let i = 0; i < 11; i++) {
            tabuada[i] = num * i;
        }

        return tabuada;
    }

    Desafio01(idade) {
        const meses = idade * 12;
        let dias = 0;
        const ano = 2024 - idade;

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

    Desafio02(a, b) {
        let c = b;
        b = a;
        a = c;

        let depois = [a, b];

        return depois;
    }

    Desafio03(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }

    Ex09(nota1, nota2, nota3) {
        var aluno = new Object();

        aluno.media = (nota1 + nota2 + nota3) / 3;

        if (aluno.media >= 7) {
            aluno.situacao = "Aprovado";
        } else if (aluno.media >= 5) {
            aluno.situacao = "Recuperação";
        } else {
            aluno.situacao = "Reprovado";
        }

        return aluno;
    }
}


// module.exports = somar { para exportar somente uma função }
// module.exports = ServiceExercicio; - Precisa instanciar toda vez que usado 
module.exports = new ServiceExercicio();