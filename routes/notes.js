const notes = require('express').Router()
const fs = require('fs')
const notesData = require('../db/db.json')

notes.get('/', (req,res) => {
    res.json(notesData)
})

module.exports = notes