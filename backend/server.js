import express from 'express'
import products from './data/products.js'
const app = express()
import dotenv from 'dotenv'

dotenv.config()

app.get('/' , (req,res) => {
    res.send('API is runnning ...')
})

app.get('/api/products' , (req,res) => {
    res.json(products)
})

app.get('/api/products/:id' , (req,res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})
const port = process.env.PORT || 5000
app.listen(port,console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`))

