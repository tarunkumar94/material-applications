const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! This is express app.</h1>')
  res.send('<h2>How are you?<h2>')	
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
