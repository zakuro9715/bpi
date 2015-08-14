'use strict'

var bHtml = require('b-html')
var express = require('express')
var router = express.Router()

router.post('/', function(req, res) {
  res.send('compile')
})

module.exports = router
