const fs=require('fs')
const path=require('path')
const request=require('request')

const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 3000
const pathIndex=path.join(__dirname, '../', 'index.html')
app.get('/', (req, res) => {

    res.sendFile(pathIndex)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




