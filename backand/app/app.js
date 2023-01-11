const price=require('../utils/getCSV')
const fs=require('fs')
const cors=require('cors')
const request=require('request')

const express = require('express')
const app = express()
const port =3001

// app.use(cors)
app.get('/', cors(), (req, res) => {
    res.send({user: 'ivan'})
})

price.getResult.then(res=> {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})








