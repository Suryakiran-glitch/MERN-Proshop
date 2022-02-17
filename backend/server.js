import express from "express"
import cors from 'cors'
import products from './data/data.js'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
dotenv.config()

const port = process.env.PORT

app.get('/api/products' , (req,res) => {
    res.json(products)
})

app.get('/api/product/:id' , (req,res) => {
    
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(port , () =>{
    console.log(`Server is up and running port ${port}`)
})