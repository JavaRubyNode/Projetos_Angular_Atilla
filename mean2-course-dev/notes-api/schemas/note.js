var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    userEmail: { type: String, required: true },
    criacao: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Note', noteSchema);
