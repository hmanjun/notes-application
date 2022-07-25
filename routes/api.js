const express = require('express')

const notesRoute = require('./notes.js')

const miniApp = express()

miniApp.use('/notes',notesRoute)

module.exports = miniApp