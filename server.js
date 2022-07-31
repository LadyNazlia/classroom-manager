const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//parse request to body-parser
app.usee(bodyparser.urlencoded({extended: true}))

//set view engine
app.set('view engine', 'ejs')
app.set('views',)

app.get('/', (request, response)=>{
    response.send('Classroom Management Application')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})