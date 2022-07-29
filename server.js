const express = require('express')
const app = express()
app.get('/', (request, response)=>{
    response.send('Classroom Management Application')
})

app.listen(3000, ()=> {
    console.log(`Server is running on http://localhost:${3000}`)
})