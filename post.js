const express = require('express');
const app = express();
app.use(express.json())

app.post("/exercicio1", (req, res) => {
    const { num1, num2 } = req.body

    const result = Number(num1) + Number(num2);

    res.status(200).json({ result: result })
})

app.post("/exercicio2", (req, res) => {
    // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
    const { valorHora, horas } = req.body

    const result = valorHora * horas;

    res.send({ result: result })
})

app.post("/exercicio3", (req, res) => {
    const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body

    const result = (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5

    res.send({ result: result })
})

app.post("/exercicio4", (req, res) => {
    const { temp } = req.body
    const result = (9*temp + 160)/5
    res.send({ result: result })
})

app.post("/exercicio5", (req, res) => {
    const { milhas } = req.body
    const result = (milhas *  1.60934).toFixed(2)
    res.send({ result: result })
})

app.post("/exercicio6", (req, res) => {
    const { sec }  = req.body

    const minutes = Number((sec / 60).toFixed(2));
    const hours = Number((minutes / 60).toFixed(2));

    res.send({ 
        results: {
            hours: hours,
            minutes: minutes,
            seconds: sec,
        } 
    })
})

app.post("/exercicio7", (req, res) => {
    const { km } = req.body

    const metros = Number((km * 1000).toFixed(2));
    const cent = Number((metros * 100).toFixed(2));

    res.send({
        results: {
            metros: metros,
            centimetro: cent
        }
    })
})

app.post("/exercicio8", (req, res) => {
    const { num } = req.body

    let tabuada = [];

    for (let i = 0; i <= 11; i++) {
        tabuada[i] = num * i;
    }

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

app.post("/exercicio9", (req, res) => {
    const { milhas } = req.body
    const result = (milhas *  1.60934).toFixed(2)
    res.send({ result: result })
})

app.post("/exercicio10", (req, res) => {
    const { milhas } = req.body
    const result = (milhas *  1.60934).toFixed(2)
    res.send({ result: result })
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})