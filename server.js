require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


//connexion avec le serveur du base de données 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: false })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//pour lire le fromat json 
app.use(express.json())

//endpoint of subscribers API 
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

//endpoint of product API 
const productsRouter = require('./routes/products')
app.use('/products', productsRouter)



//le serveur est en écoute 
app.listen(3000, () => console.log('Server Started'))


// http://localhost:3000/subscribers