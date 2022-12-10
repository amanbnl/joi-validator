// importing user validations
const userValidations = require('./user.validations')

/**
 * Common function to validate input values coming from API
 * @param {*} schema - validation schema according to which our request will be validated
 * @returns middleware 
 */
const getRequestErrors = (schema) => {
  return (req, res, next) => {
    const requestBody = { ...req?.params, ...req?.body }
    // extracting error messages from validator if any.
    const { error } = schema.validate(requestBody, { abortEarly: false, allowUnknown: false })
    if (error) {
      const validationError = error.details.map((singleError) => {
        return errorFormatter(singleError)
      }).join(', ')
      return res.status(400).json({ message: 'validation Error', error: validationError })
    } else {
      return next()
    }
  }
}

/**
 * Function which formats the error
 * @param {*} singleError 
 * @returns 
 */
const errorFormatter = (singleError) => {
  JSON.stringify(singleError).replace(/\\/g, '')
  const { message } = singleError
  message.replace('""', '')
  return isRequired(singleError.message) ? message : `Optional Parameter ${message}`
}

const isRequired = (singleError) => {
  return singleError.includes('required')
}

module.exports = {
  createUserValidations: getRequestErrors(userValidations.createUserValidations),
  getUserByIdValidations: getRequestErrors(userValidations.getUserByIdValidations),
  updateUserValidations: getRequestErrors(userValidations.updateUserValidations)
}