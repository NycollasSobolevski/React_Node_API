const express = require('express') //import express from 'express'
const cors = require('cors')
const mongoose = require('mongoose')
const { Transaction } = require('./schemes/Transation')
const bodyParser = require('body-parser');
require('dotenv').config()



const app = express();
app.use(cors())


app.get('/', async(req, res) => {

  res.send("Hello to my API access transactions in /transactions")
})

app.get('/transactions', async ( req, res ) => {
    const arrTransactions = await Transaction.find();
    res.json(arrTransactions);
})

app.post('/newTransaction', bodyParser.json(), async( req, res ) => {
  
  const data = req.body;

  const objTransaction = {
    data: new Date().toString(),
    referencia: data.reference,
    valor: data.value
  };

  await Transaction.create(objTransaction)
})

const port = 3000;

const serverInit = async() => {
  //usando .env
  const DB_ID = process.env.DB_ID
  const DB_PASS = process.env.DB_PASS
  
  await mongoose.connect(`mongodb+srv://${DB_ID}:${DB_PASS}@cluster0.1tmfuzr.mongodb.net/?retryWrites=true&w=majority`)
  app.listen(port, () => {
      console.log('FUNCIONA ESSE TREM!! \n http://localhost:3000/');
  })
}


serverInit()
