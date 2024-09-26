const { ex01 } = require ('../service/funcoes');
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
}) 