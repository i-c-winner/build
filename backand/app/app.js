const price=require('../utils/getCSV')
const fs=require('fs')
const cors=require('cors')
const request=require('request')

const express = require('express')
const app = express()
const port =3001

// app.use(cors)
app.get('/', cors(), (req, res) => {
    price.getResult.then(result=> {
      res.send(result)
        })
    })
console.log(typeof price.getResult)


    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })









