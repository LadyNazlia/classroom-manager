const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({path: 'config.env'})

app.get('/', (request, response)=>{
    response.send('Classroom Management Application')
})

app.listen(3000, ()=> {
    console.log(`Server is running on http://localhost:${3000}`)
})