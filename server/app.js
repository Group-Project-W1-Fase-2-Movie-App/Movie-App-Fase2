if (process.env.NODE_ENV === 'development') {
}
require('dotenv').config()


const cors = require("cors")
const express = require('express')
const app = express()
const router = require('./routes/index.js')
const errHandler = require('./middlewares/errorHandler')
const port = process.env.port || 3000


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})