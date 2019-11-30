const Joi = require('@hapi/joi');

const signupValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),

    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/),

    confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .strict()

      // repeat_password: Joi.ref('password'),
  })

  return schema.validate(data);

}

const minMaxValidation = data => {
  
}


module.exports = {
  signupValidation,
  minMaxValidation
}