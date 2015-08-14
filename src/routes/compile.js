'use strict'

var bHtml = require('b-html')
var express = require('express')
var router = express.Router()

router.post('/', function(req, res) {
  if(!(req.body.hasOwnProperty('b-html')))
    return res.sendStatus(400)
  var html = bHtml(req.body['b-html']);
  res.json({html: html })
})

module.exports = router
