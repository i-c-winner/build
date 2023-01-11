const csv = require('csv-parser')
const fs = require('fs')
const result =[]
const path=require('path')
const pathToScv=path.resolve(__dirname, '../', 'assets/Book1.csv')

const getResult= new Promise((resolve, reject) => {
    fs.createReadStream(pathToScv)
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
            resolve(result)
        });
})
console.log(typeof getResult, 'type fucntion')
module.exports={
        getResult
    }

