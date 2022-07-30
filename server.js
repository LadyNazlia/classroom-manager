const express = require('express')
const dotenv = require('dotenv')

const app = express()

const PORT = process.env.PORT || 8080

dotenv.config({path:'config.env'})

app.get('/', (request, response)=>{
    response.send('Classroom Management Application')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})