const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

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

// Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})