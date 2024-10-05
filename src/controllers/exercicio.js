const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {
    Ex01(req, res) {
        // tente realizar o que estiver dentro das { } - bloco de comandos
        try {
            const { num1, num2 } = req.body
    
            const result = ServiceExercicio.Somar(num1, num2);
    
            res.status(200).json({ result: result })
        } catch (e) {
            // console.error(e);
            res.status(422).json({ msg: e.message })
        }
    }

    Ex02(req, res) {
        // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
        try {
            const { valorHora, horas } = req.body
    
            const result = ServiceExercicio.Ex02(valorHora, horas);
    
            res.status(200).json({ result: result })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }

    Ex03(req, res) {
        try {
            const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body
    
            const result = ServiceExercicio.Ex03(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)
    
            res.status(200).send({ result: result })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }

    Ex04(req, res) {
        try {
            const { temp } = req.body
            const result = ServiceExercicio.Ex04(temp)
            res.status(200).json({ result: result })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }

    Ex05(req, res) {
        try {    
            const { milhas } = req.body
            const result = ServiceExercicio.Ex05(milhas)
            res.status(200).send({ result: result })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }

    Ex06(req, res) {
        try {
            const { sec } = req.body
    
            const results = ServiceExercicio.Ex06(sec);
    
            res.status(200).send({ results })
        } catch (error) {
            res.status(422).send({ msg: error.message })
        }
    }

    Ex07(req, res) {
        const { km } = req.body
    
        let array = ServiceExercicio.Ex07(km);
    
        res.send({
            results: {
                metros: array[0],
                centimetro: array[1]
            }
        })
    }

    Ex08(req, res) {
        try {
            const { num } = req.body
            
            let tabuada = ServiceExercicio.Ex08(num);
            
            res.status(200).send({
                results: {
                    x0: tabuada[0],
                    x1: tabuada[1],
                    x2: tabuada[2],
                    x3: tabuada[3],
                    x4: tabuada[4],
                    x5: tabuada[5],
                    x6: tabuada[6],
                    x7: tabuada[7],
                    x8: tabuada[8],
                    x9: tabuada[9],
                    x10: tabuada[10]
                }
            })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Desafio01(req, res) {
        try {
            const { idade } = req.body;
        
            const results = ServiceExercicio.Desafio01(idade);
        
            res.status(200).json({ results })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Desafio02(req, res) {
        try {
            const { a, b } = req.body;
        
            let antes = [a, b];
        
            let depois = ServiceExercicio.Desafio02(a, b);
        
            res.status(200).send({
                results: {
                    antes: {
                        a: antes[0],
                        b: antes[1]
                    },
                    depois: {
                        a: depois[0],
                        b: depois[1],
                    }
                }
            })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Desafio03(req, res) {
        try {
            const { num1, num2 } = req.body;
        
            const maior = ServiceExercicio.Desafio03(num1, num2);
        
            res.status(200).send({
                results: {
                    maior: maior
                }
            })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Ex09(req, res) {
        try {
            const { nota1, nota2, nota3 } = req.body;
        
            const aluno = ServiceExercicio.Ex09(nota1, nota2, nota3);
        
            res.status(200).send({
                results: {
                    media: aluno.media,
                    situacao: aluno.situacao
                }
            })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Ex10(req,res) {
        try {
            const { peso, altura } = req.body
            const results = ServiceExercicio.Ex10(peso, altura);

            res.status(200).json({ results })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Ex11(req, res) {
        try {
            const { num1, num2, operacao } = req.body;
            const result = ServiceExercicio.Ex11(num1, num2, operacao);

            res.status(200).json({ result: result });
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Ex13(req, res) {
        try {
            const { num } = req.body;
    
            const result = ServiceExercicio.Ex13(num);
    
            res.status(200).json({ result: result });
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerExercicio();