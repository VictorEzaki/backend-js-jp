class ServiceExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        return Number(num1) + Number(num2);
    }

    Subtrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        return Number(num1) - Number(num2);
    }

    Mult(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        return Number(num1) * Number(num2);
    }

    Dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        return Number(num1) / Number(num2);
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
        let results = new Object();

        results = {
            metros: metros,
            centimetros: cent 
        }

        return results;
    }

    Ex08(num) {
        let tabuada = [];

        for (let i = 0; i < 11; i++) {
            tabuada[i] = num * i;
        }

        return tabuada;
    }

    Desafio01(idade) {

        if (idade < 0 || isNaN(idade)) {
            throw new Error('Informe um número válido')
        }

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

        let object = new Object();

        object = {
            meses: meses,
            dias: dias
        }

        return object;
    }

    Desafio02(a, b) {
        if (a < 0 || b < 0 || isNaN(a) || isNaN(b)) {
            throw new Error('Informe um número válido')
        }

        let c = b;
        b = a;
        a = c;

        let depois = [a, b];

        return depois;
    }

    Desafio03(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número válido')
        }

        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }

    Ex09(nota1, nota2, nota3) {
        if (
            nota1 < 0 || isNaN(nota1) ||
            nota2 < 0 || isNaN(nota2) ||
            nota3 < 0 || isNaN(nota3)
        ) {
            throw new Error('Informe um número válido');
        }

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

    Ex10(peso, altura) {
        if (
            isNaN(peso) || peso < 0 ||
            isNaN(altura) || altura < 0
        ) {
            throw new Error('Informe números válidos');
        }

        const imc = peso / (altura * altura);
        let result = new Object();

        result = {
            valor: Number((imc).toFixed(2)),
            imc: ""
        }

        if (imc > 40) {
            result.imc = "Obesidade extrema";
        } else if (imc > 35) {
            result.imc = "Obesidade grau 2";
        } else if (imc > 30) {
            result.imc = "Obesidade grau 1";
        } else if (imc > 25) {
            result.imc = "SobrePeso";
        } else if (imc > 18.5) {
            result.imc = "Peso adequado";
        } else if (imc < 18.5) {
            result.imc = "Abaixo do peso ideal";
        }

        return result;
    }

    Ex11(num1, num2, operacao) {
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número');
        }

        switch (operacao) {
            case "+":
                return this.Somar(num1, num2);
        
            case "-":
                return this.Subtrair(num1, num2);
        
            case "*":
                return this.Mult(num1, num2);
        
            case "/":
                return this.Dividir(num1, num2);
        
            default:
                return "Escolha uma operação válida ( + | - | * | / )";
        }

    }

    Ex13(num) {
        if (isNaN(num) || num < 0) {
            throw new Error('Informe um número válido');
        }

        if (num % 2 == 0) {
            return "Par";
        } else {
            return "Impar";
        }
    }
}


// module.exports = somar { para exportar somente uma função }
// module.exports = ServiceExercicio; - Precisa instanciar toda vez que usado 
module.exports = new ServiceExercicio();