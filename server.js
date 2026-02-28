const express = require('express')
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./routes/users')
const affiliateRoutes = require('./routes/affiliate')
const cashbackRoutes = require('./routes/cashback')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRoutes)
app.use('/affiliate', affiliateRoutes)
app.use('/cashback', cashbackRoutes)

app.get('/', (req,res)=>{
    res.send("Cashio AI Running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Cashio running on port",PORT)
})
