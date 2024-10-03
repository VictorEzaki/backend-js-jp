const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router();

router.post("/exercicio1", ControllerExercicio.Ex01);

// router.post("/exercicio2", (req, res) => {
//     // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
//     try {
//         const { valorHora, horas } = req.body

//         const result = funcoes.ex02(valorHora, horas);

//         res.status(200).json({ result: result })
//     } catch (error) {
//         res.status(422).json({ msg: error.message })
//     }
// })

router.post("/exercicio3", ControllerExercicio.Ex03);

// router.post("/exercicio4", (req, res) => {
//     try {
//         const { temp } = req.body
//         const result = funcoes.ex04(temp)
//         res.status(200).json({ result: result })
//     } catch (error) {
//         res.status(422).json({ msg: error.message })
//     }
// })

// router.post("/exercicio5", (req, res) => {
//     try {
//         const { milhas } = req.body
//         const result = funcoes.ex05(milhas)
//         res.status(200).send({ result: result })
//     } catch (error) {
//         res.status(422).json({ msg: error.message })
//     }
// })

// router.post("/exercicio6", (req, res) => {
//     try {
//         const { sec } = req.body

//         const results = funcoes.ex06(sec);

//         res.status(200).send({ results })
//     } catch (error) {
//         res.status(422).send({ msg: error.message })
//     }
// })

// router.post("/exercicio7", (req, res) => {
//     const { km } = req.body

//     let array = funcoes.ex07(km);

//     res.send({
//         results: {
//             metros: array[0],
//             centimetro: array[1]
//         }
//     })
// })

// router.post("/exercicio8", (req, res) => {
//     try {
//         const { num } = req.body
        
//         let tabuada = funcoes.ex08(num);
        
//         res.status(200).send({
//             results: {
//                 x0: tabuada[0],
//                 x1: tabuada[1],
//                 x2: tabuada[2],
//                 x3: tabuada[3],
//                 x4: tabuada[4],
//                 x5: tabuada[5],
//                 x6: tabuada[6],
//                 x7: tabuada[7],
//                 x8: tabuada[8],
//                 x9: tabuada[9],
//                 x10: tabuada[10]
//             }
//         })
//     } catch (e) {
//         res.status(422).json({ msg: e.message })
//     }
// })

// router.post("/desafio01", (req, res) => {
//     const { idade } = req.body;

//     let array = funcoes.desafio01(idade);

//     res.send({
//         results: {
//             idade: idade,
//             meses: array[0],
//             dias: array[1]
//         }
//     })
// })

// router.post("/desafio02", (req, res) => {
//     const { a, b } = req.body;

//     let antes = [a, b];

//     let depois = funcoes.desafio02(a, b);

//     res.send({
//         results: {
//             antes: {
//                 a: antes[0],
//                 b: antes[1]
//             },
//             depois: {
//                 a: depois[0],
//                 b: depois[1],
//             }
//         }
//     })
// })

// router.post("/desafio03", (req, res) => {
//     const { num1, num2 } = req.body;

//     const maior = funcoes.desafio03(num1, num2);

//     res.send({
//         results: {
//             maior: maior
//         }
//     })
// })

// router.post("/exercicio9", (req, res) => {
//     const { nota1, nota2, nota3 } = req.body;

//     const aluno = funcoes.ex09(nota1, nota2, nota3);

//     res.send({
//         results: {
//             media: aluno.media,
//             situacao: aluno.situacao
//         }
//     })
// })

module.exports = router;