const express = require('express')
const router = express.Router()

const affiliateService = require('../services/affiliateService')

router.get('/links',(req,res)=>{

    const links = affiliateService.getLinks()

    res.json(links)

})

module.exports = router
