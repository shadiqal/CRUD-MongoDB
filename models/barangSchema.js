const mongoose = require('mongoose');

var barangSchema = new mongoose.Schema({
    namaBarang: ({
        type: String,
        required: true
    }),
    tag: ({
        type: String,
        required: true
    }),
    tanggal: ({
        type: String,
        required: true
    })
})

var barang = mongoose.model('databarangs', barangSchema);

module.exports = barang;