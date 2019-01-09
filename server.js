const express = require('express')
const app = express()
const fs = require('fs')

app.post('/upload', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  let body = ''
  req.on('data', chunk => body += chunk)
  req.on('end', () => {
    body = JSON.parse(body)
    const pAll = []
    body.forEach((val, ind) => {
      const base64 = val.dataSrc.replace(/^data:image\/\w+;base64,/, '')
      const buffer = new Buffer(base64, 'base64')
      pAll[ind] = new Promise((resolve, reject) => {
        fs.writeFile(`upload/${val.name}`, buffer, err => {
          if (err) {
            reject(err)
          } 
          resolve()
        })
      })
    })
    const p = Promise.all(pAll)
    p.then(val => {
      res.send({result: 1, message: 'file upload success'})
    }, err => {
      console.log(err)
    })
  })
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})