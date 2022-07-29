const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({path:'views/config.env'})
const PORT = process.env.PORT || 8080



app.get('/', (request, response)=>{
    response.send('Classroom Management Application')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})