const Joi = require('@hapi/joi');

const valid = Joi.object({

    username: Joi.string().min(2).max(30).required(),
    password: Joi.string().regex(/^[\w]{8,30}$/),
    fullName: Joi.string().required(),
    birthDay: Joi.date().required(),
    gender: Joi.boolean().required()
});


module.exports = valid;
