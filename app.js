const express = require('express')
const app = express()
const teams = require('./routes/teams')


app.get('/',(req,res) => {
    res.send('Hello Footy')
})

app.use(express.json())
app.use('/teams', teams)


module.exports = app