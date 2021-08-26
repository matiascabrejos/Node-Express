const http = require('http')
const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  )
})

app.post('/product', (req, res, next) => {
  console.log(req.body.title)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hi there!</h1>')
})

/* app.use((req, res, next) => {
    console.log('First middleware!');
    next();  
});

app.use((req, res, next) => {
    console.log('Second middleware!');
}); */

const server = http.createServer(app)

server.listen(3000)

console.log('hi!')
