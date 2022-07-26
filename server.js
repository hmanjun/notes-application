const express = require('express')
const api = require('./routes/api.js')

const path = require('path')
const app = express()


//establish port
const PORT = process.env.PORT || 3001
//send all files in public when sending html file
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api) //link to api router

//Listeners for homepage and notes page
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
