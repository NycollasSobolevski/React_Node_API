const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    valor: {
      type: 'Number',
      required: true
    },
    referencia: {
      type: 'string',
      required: true
    },
    data: {
      type: 'string',
      required: true
    }
  })

  const Transaction = mongoose.model("Transaction", transactionSchema)
  
  
  module.exports = {Transaction};