const ServiceExercicio = require('./../services/funcoes')

class ControllerExercicio {
    Ex01(req, res) {
        // tente realizar o que estiver dentro das { } - bloco de comandos
        try {
            const { num1, num2 } = req.body
    
            const result = ServiceExercicio.Ex01(num1, num2);
    
            res.status(200).json({ result: result })
        } catch (e) {
            // console.error(e);
            res.status(422).json({ msg: e.message })
        }
    }

    Ex03(req, res) {
        try {
            const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body
    
            const result = ServiceExercicio.ex03(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)
    
            res.status(200).send({ result: result })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }
}

module.exports = new ControllerExercicio();