//initializing Router
const router = require('express').Router()
//importing validations
const validations = require('../validations/index')
//importing userControllers
const userControllers = require('../controllers/users')

/**
 * 
 * 1st argument as path
 * 2nd argument in middlewares
 * 3rd controller which handles the request/response
 */

router.get("/:id", [validations.getUserByIdValidations], userControllers.getUserById)
router.post('/', [validations.createUserValidations], userControllers.createUser)
router.put("/", [validations.updateUserValidations], userControllers.updateUser)
router.delete("/:id", [validations.getUserByIdValidations], userControllers.deleteUser)


module.exports = router