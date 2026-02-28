require('dotenv').config()

function calculate(amount){

    const percent = process.env.CASHBACK_PERCENT || 40

    return amount * percent / 100

}

module.exports = {

    calculate

}
