let mongoose = require('mongoose');
const mensajesCollection = 'mensajes';

const MensajeEsquema = mongoose.Schema({
    email: {type: String, require: true},
    texto: {type: String, require: true},
    fecha: {type: String, require: true},
});

module.exports = {
    MensajeModelo: mongoose.model(mensajesCollection, MensajeEsquema)
}