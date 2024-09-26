const funcoes = require('./service/funcoes');

const express = require('express');
const app = express();
app.use(express.json())

app.post("/exercicio1", (req, res) => {
    const { num1, num2 } = req.body

    const result = funcoes.ex01(num1, num2);

    res.status(200).json({ result: result })
})

app.post("/exercicio2", (req, res) => {
    // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
    const { valorHora, horas } = req.body

    const result = funcoes.ex02(valorHora, horas);

    res.send({ result: result })
})

app.post("/exercicio3", (req, res) => {
    const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body

    const result = funcoes.ex03( pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 )

    res.send({ result: result })
})

app.post("/exercicio4", (req, res) => {
    const { temp } = req.body
    const result = funcoes.ex04( temp )
    res.send({ result: result })
})

app.post("/exercicio5", (req, res) => {
    const { milhas } = req.body
    const result = funcoes.ex05(milhas)
    res.send({ result: result })
})

app.post("/exercicio6", (req, res) => {
    const { sec }  = req.body

    let array = funcoes.ex06(sec);

    res.send({ 
        results: {
            hours: array[0],
            minutes: array[1],
            seconds: sec
        } 
    })
})

app.post("/exercicio7", (req, res) => {
    const { km } = req.body

    let array = funcoes.ex07(km);

    res.send({
        results: {
            metros: array[0],
            centimetro: array[1]
        }
    })
})

app.post("/exercicio8", (req, res) => {
    const { num } = req.body

    let tabuada = funcoes.ex08(num);

    res.send({
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
})

app.post("/desafio01", (req, res) => {
    const { idade } = req.body;

    let array = funcoes.desafio01(idade);

    res.send({
        results: {
            idade: idade,
            meses: array[0],
            dias: array[1]
        }
    })
})

app.post("/desafio02", (req, res) => {
    const { a, b } = req.body;

    let antes = [ a, b ];

    let depois = funcoes.desafio02(a, b);

    res.send({
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
})

app.post("/desafio03", (req, res) => {
    const { num1, num2 } = req.body;

    const maior = funcoes.desafio03(num1, num2);

    res.send({
        results: {
            maior: maior
        }
    })
})

app.post("/exercicio9", (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    const aluno = funcoes.ex09(nota1, nota2, nota3);

    res.send ({ 
        results: {
            media: aluno.media,
            situacao: aluno.situacao 
        } 
    })
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})