// importing joi validator
const joi = require('joi')

// validation schema for create User request
const createUserValidations = joi.object({
  firstName: joi.string().required().min(3).max(15),
  lastName: joi.string().required().min(3).max(15),
  email: joi.string().required().email(),
  mobileNumber: joi.string().required().length(10).pattern(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/),
  password: joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message({ "string.pattern.base": "Password should be must contain minimum one character and one digit." })
})

// validation schema for get user request
const getUserByIdValidations = joi.object({
  id: joi.number().required().integer()
})

// validation schema for update user request
const updateUserValidations = joi.object({
  id: joi.number().integer().required(),
  firstName: joi.string().required().min(3).max(15),
  lastName: joi.string().required().min(3).max(15),
  email: joi.string().required().email(),
  mobileNumber: joi.string().required().length(10).pattern(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/),
  password: joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message({ "string.pattern.base": "Password should be must contain minimum one character and one digit." })
})

module.exports = {
  createUserValidations,
  getUserByIdValidations,
  updateUserValidations
}