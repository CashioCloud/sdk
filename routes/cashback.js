const express = require('express')
const router = express.Router()

const cashbackService = require('../services/cashbackService')

router.post('/reward',(req,res)=>{

    const reward = cashbackService.processCashback(req.body)

    res.json(reward)

})

module.exports = router
