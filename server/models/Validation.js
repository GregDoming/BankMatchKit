const Joi = require('@hapi/joi');

const signupValidation = data => {
  const schema = Joi.object({
    userName: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),

    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)

      // repeat_password: Joi.ref('password'),
  })

  return schema.validate(data);

}


module.exports = {
  signupValidation
}