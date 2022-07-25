const express = require('express')
const app = express()

const PORT = 3001

app.get('/', (req,res) => {
    res.sendFile('./public/index.html')
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
