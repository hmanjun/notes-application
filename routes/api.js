const express = require('express')

const notesRoute = require('./notes.js')

const miniApp = express()

//Send get/post requests for /api/notes here
miniApp.use('/notes',notesRoute)

module.exports = miniApp