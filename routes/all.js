const express = require('express');
const router = express.Router();
const user = require('../models/userSchema.js');
const barang = require('../models/barangSchema.js');


//Index
router.get('/', function (req, res) {
    res.render('index')
})
router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({
        username: username,
        password: password
    }, function (err, result) {
        if (err) console.log(err)
        if (result != null) {
            res.json({
                success: true
            })
        } else {
            res.json({
                success: false
            })
        }
    })
})
//Index

//Dashboard 
router.get('/dashboard/master', function (req, res) {
    res.render('dashboard')
})
router.get('/dashboard/master/fetch', function (req, res) {
    barang.find({}, function (err, barang) {
        if (err) console.log(err)
        res.json(barang)
    })
})
router.post('/dashboard/master/tambahData', function (req, res) {
    var namaBarang = req.body.namaBarang;
    var tag = req.body.tag;
    var tanggal = req.body.tanggal;
    console.log(tanggal)
    barang.create({
        namaBarang: namaBarang,
        tag: tag,
        tanggal: tanggal
    }, function (err, result) {
        if (err) console.log(err)
        if (result) {
            res.json({
                success: true
            })
        }
    })
})
router.post('/dashboard/master/formEdit', function (req, res) {
    var id = req.body.id;
    barang.find({
        _id: id
    }, function (err, result) {
        if (err) console.log(err)
        if (result != null) {
            res.json(result)
        }
    })
})
router.delete('/dashboard/master/delete', function (req, res) {
    var id = req.body.id;
    barang.findByIdAndDelete({
        _id: id
    }, function (err, result) {
        if (err) console.log(err)
        if (result != null) {
            res.json({
                success: true
            })
        }
    })
})
router.post('/dashboard/master/update', function (req, res) {
    var namaBarang = req.body.namaBarang;
    var tag = req.body.tag;
    var tanggal = req.body.tanggal;
    var id = req.body.id;
    barang.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            namaBarang: namaBarang,
            tag: tag,
            tanggal: tanggal
        }
    }, function (err, result) {
        if (err) console.log(err)
        if (result) {
            res.json({
                success: true
            })
        } else {
            res.json({
                success: false
            })
        }

    })
})
//Dashboard 


module.exports = router;