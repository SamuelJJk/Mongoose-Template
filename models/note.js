// models are a representation of our data
// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our CRUD

const mongoose = require('mongoose')

// 
const noteSchema = mongoose.Schema({
    title:String,
    body: String
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note