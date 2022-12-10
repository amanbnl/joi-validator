//importing express module
const express = require('express')
//initializing app
const app = express()
//assigning port
const port = process.env.APP_PORT || 8080
//parsing incoming request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//importing routes
const userRoutes = require('./routes/index')
app.use("/users", userRoutes)

//listening the incoming requests on specified port
app.listen(port, () => console.log(`server is running on port http://localhost:${port}`))