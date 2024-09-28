const { ex01, ex02, ex03, ex04, ex05, ex06 } = require ('../service/funcoes');
const { describe, it, expect } = require ('@jest/globals');

describe('testando a função somar: ', () => {
    // Faz os ITs(testes)

    it('Somar dois números positivos', () => {
        const result = ex01(2, 2);
        // console.log(result);
        
        expect(result).toBe(4);
    })

    it('Somar dois números negativos com positivo', () => {
        const result = ex01(-2, 2);
        // console.log(result);
        
        expect(result).toBe(0);
    })

    it('Somar dois números negativos(right) com positivo(left)', () => {
        const result = ex01(2, -2);
        // console.log(result);
        
        expect(result).toBe(0);
    })

    it('Somar dois números negativos com zero', () => {
        const result = ex01(-2, 0);
        // console.log(result);
        
        expect(result).toBe(-2);
    })
    
    it('Deve somar zero com número negativo', () => {
        const result = ex01(0, -2);
        // console.log(result);
        
        expect(result).toBe(-2);
    })
    
    it('Deve somar número com uma letra', () => {
        const result = ex01(2, 'a');
        // console.log(result);
        
        expect(result).toBe('Erro');
    })

    it('Deve somar letra com um número', () => {
        const result = ex01('a', 2);
        // console.log(result);
        
        expect(result).toBe('Erro');
    })
}) 

describe('testando a função salario: ', () => {
    // Faz os ITs(testes)

    it('Deve multiplicar número negativo com positivo', () => {
        const result = ex02(-7, 200);
        // console.log(result);

        expect(result).toBe('Erro');
    })

    it('Deve multiplicar número positivo com negativo', () => {
        const result = ex02(7, -200);
        // console.log(result);

        expect(result).toBe('Erro');
    })

    it('Deve multiplicar letra com número', () => {
        const result = ex02('a', -200);
        // console.log(result);

        expect(result).toBe('Erro');
    })

    it('Deve multiplicar número com letra', () => {
        const result = ex02(-7, 'a');
        // console.log(result);

        expect(result).toBe('Erro');
    })

    it('Deve multiplicar número negativo com negativo', () => {
        const result = ex02(-7, -200);
        // console.log(result);

        expect(result).toBe('Erro');
    })

    it('Deve multiplicar número positivo com positivo', () => {
        const result = ex02(7, 200);
        // console.log(result);

        expect(result).toBe(1400);
    })
}) 

describe('testando a função que calcula média de peso', () => {
    
    it('Calcula a média com uma letra na primeira posição e 4 números decimais positivos', () => {
        const result = ex03('a', 80.5, 80.5, 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com uma letra na segunda posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 'a', 80.5, 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com uma letra na terceira posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 'a', 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com uma letra na quarta posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 80.5, 'a', 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com uma letra na última posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 80.5, 80.5, 'a');

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na primeira posição e 4 números decimais positivos', () => {
        const result = ex03(-80, 80.5, 80.5, 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na segunda posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, -80, 80.5, 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na terceira posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, -80, 80.5, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na quarta posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 80.5, -80, 80.5);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na última posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 80.5, 80.5, -80);

        expect(result).toBe('Erro');
    })

    it('Calcula a média com um número negativo na última posição e 4 números decimais positivos', () => {
        const result = ex03(80.5, 80.5, 80.5, 80.5, 80.5);

        expect(result).toBe(80.5);
    })
})

describe('Testando a função que calcula a conversão de graus celcius para fahrenheint', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = ex04('a');

        expect(result).toBe('Erro');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ex04(3);

        expect(result).toBe(37.4);
    })
    
    it('Deve tentar converter com um número negativo', () => {
        const result = ex04(-3);

        expect(result).toBe(26.6);
    })
    
    it('Deve tentar converter com um número decimal positivo', () => {
        const result = ex04(3.23);
        
        expect(result).toBe(37.8);
    })
    
    it('Deve tentar converter com um número decimal negativo', () => {
        const result = ex04(-3.23);

        expect(result).toBe(26.2);
    })
    
    it('Deve tentar converter com um valor vazio', () => {
        const result = ex04();

        expect(result).toBe('Erro');
    })
})

describe('Testando a função que converte milhas em km', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = ex05('a');

        expect(result).toBe('Erro');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ex05(1);

        expect(result).toBe(1.61);
    })
    
    it('Deve tentar converter com um número negativo', () => {
        const result = ex05(-3);

        expect(result).toBe('Erro');
    })
    
    it('Deve tentar converter com um número decimal positivo', () => {
        const result = ex05(3.23);
        
        expect(result).toBe(5.20);
    })
    
    it('Deve tentar converter com um número decimal negativo', () => {
        const result = ex05(-3.23);

        expect(result).toBe("Erro");
    })
    
    it('Deve tentar converter com um valor vazio', () => {
        const result = ex05();

        expect(result).toBe('Erro');
    })
})

describe('Testando a função que converte segundos em horas e minutos', () => {
    
    it('Deve tentar converter com uma letra', () => {
        const result = ex05('a');

        expect(result).toBe('Erro');
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ex06(2000);

        expect(result).toStrictEqual({"horas": 0.56, "minutos": 33.33, "segundos": 2000});
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ex06(2000.54);

        expect(result).toStrictEqual({"horas": 0.56, "minutos": 33.34, "segundos": 2000.54});
    })
    
    it('Deve tentar converter com um número positivo', () => {
        const result = ex06(2000.542);

        expect(result).toStrictEqual({"horas": 0.56, "minutos": 33.34, "segundos": 2000.542});
    })
})