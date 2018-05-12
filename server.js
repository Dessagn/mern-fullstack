const express = require('express')
const mongoose = require('mongoose')

//create express app
const app = express();
//configure db source
const db = require('./config/keys').mongoUri
// Configure port
const port = process.env.PORT || 5000

// connect to mongodb using mongoose
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