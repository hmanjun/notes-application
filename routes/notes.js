const notes = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const notesData = require('../db/db.json')

notes.get('/', (req,res) => {
    res.json(notesData)
})

notes.post('/', (req,res) => {
    const {title,text} = req.body
    if(title && text){
        const newNote = {
            id: uuidv4,
            title,
            text
        }
        notesData.push(newNote)
        fs.writeFile('./db/db.json',JSON.stringify(notesData), (err) => {
            if(err) console.log(err)
            else res.json(newNote)
        })

    }
})

module.exports = notes