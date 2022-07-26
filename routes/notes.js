const notes = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid'); //Generate unique ID
const notesData = require('../db/db.json')

//Get saved notes
notes.get('/', (req,res) => {
    res.json(notesData)
})

notes.post('/', (req,res) => {
    const {title,text} = req.body
    if(title && text){ //Create a note object
        const newNote = {
            id: uuidv4(),
            title,
            text
        }
        notesData.push(newNote)
        //Update notes database
        fs.writeFile('./db/db.json',JSON.stringify(notesData), (err) => {
            if(err) console.log(err)
        })
        res.json(newNote)
    }
})

module.exports = notes