const ServiceExercicio = require ('../src/services/exercicio');
const { describe, it, expect } = require ('@jest/globals');

describe('testando a função somar: ', () => {
    // Faz os ITs(testes)

    it('Somar dois números positivos', () => {
        const somar = ServiceExercicio.Somar(2, 2);
        // console.log(somar);
        
        expect(somar).toBe(4);
    })

    it('Somar dois números negativos com positivo', () => {
        const result = ServiceExercicio.Somar(-2, 2);
        // console.log(result);
        
        expect(result).toBe(0);
    })

    it('Somar dois números negativos(right) com positivo(left)', () => {
        const result = ServiceExercicio.Somar(2, -2);
        // console.log(result);
        
        expect(result).toBe(0);
    })

    it('Somar dois números negativos com zero', () => {
        const result = ServiceExercicio.Somar(-2, 0);
        // console.log(result);
        
        expect(result).toBe(-2);
    })
    
    it('Deve somar zero com número negativo', () => {
        const result = ServiceExercicio.Somar(0, -2);
        // console.log(result);
        
        expect(result).toBe(-2);
    })
    
    it('Deve somar número com uma letra', () => {
        const somar = () => ServiceExercicio.Somar(2, 'a');
        // console.log(somar);
        
        expect(somar).toThrow('Informe um número');
    })

    it('Deve somar letra com um número', () => {
        const result = () => ServiceExercicio.Somar('a', 2);
        // console.log(result);
        
        expect(result).toThrow('Informe um número');
    })
}) 

describe('testando a função salario: ', () => {
    // Faz os ITs(testes)

    it('Deve multiplicar número negativo com positivo', () => {
        const result = () => ServiceExercicio.Ex02(-7, 200);
        // console.log(result);

        expect(result).toThrow('Informe um número válido');
    })

    it('Deve multiplicar número positivo com negativo', () => {
        const result = () => ServiceExercicio.Ex02(7, -200);
        // console.log(result);

        expect(result).toThrow('Informe um número válido');
    })

    it('Deve multiplicar letra com número', () => {
        const result = () => ServiceExercicio.Ex02('a', -200);
        // console.log(result);

        expect(result).toThrow('Informe um número válido');
    })

    it('Deve multiplicar número com letra', () => {
        const result = () => ServiceExercicio.Ex02(-7, 'a');
        // console.log(result);

        expect(result).toThrow('Informe um número válido');
    })

    it('Deve multiplicar número negativo com negativo', () => {
        const result = () => ServiceExercicio.Ex02(-7, -200);
        // console.log(result);

        expect(result).toThrow('Informe um número válido');
    })

    it('Deve multiplicar número positivo com positivo', () => {
        const result = ServiceExercicio.Ex02(7, 200);
        // console.log(result);

        expect(result).toBe(1400);
    })
}) 

describe('testando a função que calcula média de peso', () => {
    
    it('Calcula a média com uma letra na primeira posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03('a', 80.5, 80.5, 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com uma letra na segunda posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 'a', 80.5, 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com uma letra na terceira posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, 'a', 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com uma letra na quarta posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, 80.5, 'a', 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com uma letra na última posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, 80.5, 80.5, 'a');

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na primeira posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(-80, 80.5, 80.5, 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na segunda posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, -80, 80.5, 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na terceira posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, -80, 80.5, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na quarta posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, 80.5, -80, 80.5);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na última posição e 4 números decimais positivos', () => {
        const result = () => ServiceExercicio.Ex03(80.5, 80.5, 80.5, 80.5, -80);

        expect(result).toThrow('Informe um número válido');
    })

    it('Calcula a média com um número negativo na última posição e 4 números decimais positivos', () => {
        const result = ServiceExercicio.Ex03(80.5, 80.5, 80.5, 80.5, 80.5);

        expect(result).toBe(80.5);
    })
})

describe('Testando a função que calcula a conversão de graus celcius para fahrenheint', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = () => ServiceExercicio.Ex04('a');

        expect(result).toThrow('Informe um número válido');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ServiceExercicio.Ex04(3);

        expect(result).toBe(37.4);
    })
    
    it('Deve tentar converter com um número negativo', () => {
        const result = ServiceExercicio.Ex04(-3);

        expect(result).toBe(26.6);
    })
    
    it('Deve tentar converter com um número decimal positivo', () => {
        const result = ServiceExercicio.Ex04(3.23);
        
        expect(result).toBe(37.8);
    })
    
    it('Deve tentar converter com um número decimal negativo', () => {
        const result = ServiceExercicio.Ex04(-3.23);

        expect(result).toBe(26.2);
    })
    
    it('Deve tentar converter com um valor vazio', () => {
        const result = () => ServiceExercicio.Ex04();

        expect(result).toThrow('Informe um número válido');
    })
})

describe('Testando a função que converte milhas em km', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = () => ServiceExercicio.Ex05('a');

        expect(result).toThrow('Informe um número válido');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ServiceExercicio.Ex05(1);

        expect(result).toBe(1.61);
    })
    
    it('Deve tentar converter com um número negativo', () => {
        const result = () => ServiceExercicio.Ex05(-3);

        expect(result).toThrow('Informe um número válido');
    })
    
    it('Deve tentar converter com um número decimal positivo', () => {
        const result = ServiceExercicio.Ex05(3.23);
        
        expect(result).toBe(5.20);
    })
    
    it('Deve tentar converter com um número decimal negativo', () => {
        const result = () => ServiceExercicio.Ex05(-3.23);

        expect(result).toThrow("Informe um número válido");
    })
    
    it('Deve tentar converter com um valor vazio', () => {
        const result = () => ServiceExercicio.Ex05();

        expect(result).toThrow('Informe um número válido');
    })
})

describe('Testando a função que converte segundos em horas e minutos', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = () => ServiceExercicio.Ex06('a');

        expect(result).toThrow('Informe um número válido');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ServiceExercicio.Ex06(2000);

        expect(result).toStrictEqual({horas: 0.56, minutos: 33.33, segundos: 2000});
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ServiceExercicio.Ex06(2000.54);

        expect(result).toStrictEqual({"horas": 0.56, "minutos": 33.34, "segundos": 2000.54});
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ServiceExercicio.Ex06(2000.542);

        expect(result).toStrictEqual({"horas": 0.56, "minutos": 33.34, "segundos": 2000.542});
    })
})

describe('Testando a função que converte km em metros e centímetros', () => {

    it('Testando a função recebendo valor positivo', () => {
        const result = ServiceExercicio.Ex07(1);

        expect(result).toStrictEqual({ metros: 1000, centimetros: 100000 });
    })

})

describe('Testando a função que calcula o IMC', () => {

    it('Deve calcular o imc recebendo valores positivos tanto para o peso quanto para a altura', () => {
        const result = ServiceExercicio.Ex10(65.50, 1.70)

        expect(result).toStrictEqual({ valor: 22.66, imc: 'Peso adequado' })
    })

    it('Deve calcular o imc recebendo valores negativos tanto para o peso quanto para a altura', () => {
        const result = () => ServiceExercicio.Ex10(-65.50, -1.70)

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo peso negativo e altura positiva', () => {
        const result = () => ServiceExercicio.Ex10(-65.50, 1.70)

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo peso positivo e altura negativa', () => {
        const result = () => ServiceExercicio.Ex10(65.50, -1.70)

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo letras tanto para peso quanto para altura', () => {
        const result = () => ServiceExercicio.Ex10("a", "b")

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo letra para peso e número para altura', () => {
        const result = () => ServiceExercicio.Ex10("a", 1.70)

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo número para peso e letra para altura', () => {
        const result = () => ServiceExercicio.Ex10(65.50, "a")

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo número negativo para peso e letra para altura', () => {
        const result = () => ServiceExercicio.Ex10(-65.50, "a")

        expect(result).toThrow('Informe números válidos')
    })

    it('Deve calcular o imc recebendo letra para peso e número negativo para altura', () => {
        const result = () => ServiceExercicio.Ex10("a", -1.70)

        expect(result).toThrow('Informe números válidos')
    })

})

describe('Testando a função calculadores', () => {

    it('Testando a soma da função calculadora recebendo valores positivos', () => {
        const result = ServiceExercicio.Ex11(2, 2, "+");

        expect(result).toBe(4);
    })

    it('Testando a soma da função calculadora recebendo valores positivos', () => {
        const result = ServiceExercicio.Ex11(2, 2, "-");

        expect(result).toBe(0);
    })

    it('Testando a soma da função calculadora recebendo valores positivos', () => {
        const result = ServiceExercicio.Ex11(2, 2, "*");

        expect(result).toBe(4);
    })

    it('Testando a soma da função calculadora recebendo valores positivos', () => {
        const result = ServiceExercicio.Ex11(2, 2, "/");

        expect(result).toBe(1);
    })

})