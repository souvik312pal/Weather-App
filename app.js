require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

app.use("/public", express.static("public"))
app.use('/', require("./Route/route"))

app.engine('hbs', hbs.__express)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

hbs.registerPartials(path.join(__dirname, 'views/partials'))

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})