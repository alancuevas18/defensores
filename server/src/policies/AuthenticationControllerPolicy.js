const Joi = require('joi');

module.exports = {
    register(req, res, next){
        const schema = {
            name: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9{8,32}$]')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if(error) {
            switch (error.details[0].context.key){
                case 'name':
                    res.status(400).send({
                        error: 'Debe de ultitlizar solo letras y numeros en su Nombre'
                        
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error: 'Debe de ultitlizar un email correcto'
                        
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Por favor revisar la clave bajo las siguientes reglas
                        <br>
                        1. Debe tener entre 8 y 32 caracteres
                        2. Solo puede tener letras y numeros
                        
                        `
                        
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Informacion no valida'
                    })
            }
        }else {
            next()
        }
     
    }
}