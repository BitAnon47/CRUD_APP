//Use of the express framework 
const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb =require('./db.js')
const app = express()
const employeeRoutes =require('./controller/employee.controller.js')
const {errorHandler}=require('./middleware')


//middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)
app.use(errorHandler)

//Db connection here
connectDb()
.then(()=>{
    console.log('Db connection successfull')
    app.listen(3000, () => console.log('server running at the port 3000'))
})
.catch(err=>console.log(err))