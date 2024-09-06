const express = require('express');
const path = require('path')
const app = express();

app.get("/exercicio1", (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    console.log('Hello World')
    res.json({ msg: Number(num1) + Number(num2) })
})

app.get("/exercicio2", (req, res) => {
    // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
    const valorHora = req.query.valorHora
    const horas = req.query.horas
    console.log('Hello World')
    res.json({ msg: valorHora * horas + " horas trabalhadas"})
})

app.get("/exercicio3", (req, res) => {
    const pessoa1 = req.query.pessoa1
    const pessoa2 = req.query.pessoa2
    const pessoa3 = req.query.pessoa3
    const pessoa4 = req.query.pessoa4
    const pessoa5 = req.query.pessoa5
    const result = (Number(pessoa1) + Number(pessoa2) + Number(pessoa3) + Number(pessoa4) + Number(pessoa5)) / 5
    console.log('Hello World')
    res.json({ msg: `A média de peso entre as 5 pessoas: ${result} `})
})

app.get("/exercicio4", (req, res) => {
    const temp = req.query.temp
    const result = (9*Number(temp) + 160)/5
    console.log('Hello World')
    res.json({ msg: `${temp}C° em Fahrenheit é: ${result} `})
})

app.get("/exercicio5", (req, res) => {
    const milhas = req.query.milhas
    const result = milhas *  1.60934
    console.log('Hello World')
    res.json({ msg: `${milhas} em Quilomêtros é: ${result}km`})
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})