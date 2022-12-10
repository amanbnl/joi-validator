//importing helper utilities
const { statusCodes, messages, successResponse, errorResponse } = require('../utils/helper')
// importing mock data
const mockData = require('../db/mock.json')

/**
 * Purpose: Function to get the user details by provided userId
 * @param {*} params 
 * @returns 
 */
const getUserById = async (params) => {
  try {
    const user = mockData.filter(el => el.id == params.id)
    return user.length ? successResponse(user[0]) : errorResponse(statusCodes.NOT_FOUND, messages.NOT_FOUND)
  } catch (error) {
    console.log(error, 'error')
    return errorResponse()

  }
}

/**
 * Purpose: Function to create user
 * @param {*} body 
 * @returns 
 */
const createUser = async (body) => {
  try {
    body.id = mockData.length + 1
    mockData.push(body)
    return getUserById({ id: body.id })
  } catch (error) {
    return errorResponse()
  }
}

/**
 * Purpose: Function to updated user
 * @param {*} body 
 * @returns 
 */
const updateUser = async (body) => {
  try {
    const index = mockData.findIndex(el => el.id == body.id)
    if (index != -1) {
      mockData[index] = body
      return getUserById({ id: body.id })
    }
    return errorResponse(statusCodes.NOT_FOUND, messages.NOT_FOUND)
  } catch (error) {
    return errorResponse()
  }
}

/**
 * Purpose: Function to delete the user
 * @param {*} params 
 * @returns 
 */
const deleteUser = async (params) => {
  try {
    const index = mockData.findIndex(el => el.id == params.id)
    if (index != -1) {
      mockData.splice(index, 1)
      return successResponse()
    }
    return errorResponse(statusCodes.NOT_FOUND, messages.NOT_FOUND)
  } catch (error) {
    return errorResponse()
  }
}


module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser
}