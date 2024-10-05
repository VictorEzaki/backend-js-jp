const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router();

router.post("/exercicio1", ControllerExercicio.Ex01);

router.post("/exercicio2", ControllerExercicio.Ex02);

router.post("/exercicio3", ControllerExercicio.Ex03);

router.post("/exercicio4", ControllerExercicio.Ex04);

router.post("/exercicio5", ControllerExercicio.Ex05);

router.post("/exercicio6", ControllerExercicio.Ex06);

router.post("/exercicio7", ControllerExercicio.Ex07);

router.post("/exercicio8", ControllerExercicio.Ex08);

router.post("/desafio01", ControllerExercicio.Desafio01);

router.post("/desafio02", ControllerExercicio.Desafio02);

router.post("/desafio03", ControllerExercicio.Desafio03);

router.post("/exercicio9", ControllerExercicio.Ex09);

router.post("/exercicio10", ControllerExercicio.Ex10);

router.post("/exercicio11", ControllerExercicio.Ex11);

router.post("/exercicio14", ControllerExercicio.Ex13);

module.exports = router;