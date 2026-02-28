const express = require('express')
const router = express.Router()

const users = []

router.post('/register',(req,res)=>{

    const user = {
        id: Date.now(),
        email: req.body.email,
        balance:0
    }

    users.push(user)

    res.json(user)

})

router.get('/',(req,res)=>{

    res.json(users)

})

module.exports = router
