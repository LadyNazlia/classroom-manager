const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set('view engine', 'ejs')
// app.set('views',path.resolve(__dirneame, 'views/ejs'))

//load assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/img')))

app.get('/', (request, response)=>{
    response.render('index')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})