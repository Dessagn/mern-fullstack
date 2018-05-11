const express = require('express')
const mongoose = require('mongoose')

const app = express();
const db = require('./config/keys').mongoUri
const port = process.env.PORT || 5000

mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})