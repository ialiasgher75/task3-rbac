const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', require('./routes/auth'))
app.use('/admin', require('./routes/admin'))

app.get('/', (req, res) => {
  res.json({ message: 'Task 3 - Role Based Access Control' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})