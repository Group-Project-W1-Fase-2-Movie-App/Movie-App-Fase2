require('dotenv').config()

const cors = require("cors")
const express = require('express')
const port = process.env.port
const app = express()
const router = require('./routes/index.js')


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/',router)
// app.use(errHandler)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})