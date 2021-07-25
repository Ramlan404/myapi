const { default: axios } = require('axios')
var express = require('express')
const { addVisitor, getVisitor } = require('../lib/utils/premium')
var router = express.Router()
require('dotenv').config()

router.get('/', (req, res) => {
    addVisitor()
    res.redirect('/docs')
})

router.get('/docs', async(req, res) => {
    addVisitor()
    visitor = (await getVisitor()).counter
    res.render('index', { host: process.env.S_HOST, title: "Ramlan - APIs", visitor })
})

router.get('/changelog', (req, res) => {
    addVisitor()
    res.render('changelog', { host: process.env.S_HOST, title: "Ramlan - APIs" })
})


router.get('/ytmate', async(req, res) => {
    var url = req.query.url
    result = await axios.get(url, { responseType: 'arraybuffer' })
    res.end(result.data)
})

module.exports = router