const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.get('/about', function(req,res){
    res.render('about')
})

router.get('/weather', function(req,res){
    res.render('weather')
})

router.get('*', function(req,res){
    res.status(404).render('404', {
        errMsg: 'Oops! Page not found.'
    })
})

module.exports = router