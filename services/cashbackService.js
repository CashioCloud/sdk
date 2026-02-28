const calculator = require('../utils/cashbackCalculator')

function processCashback(data){

    const cashback = calculator.calculate(data.amount)

    return {

        user:data.user,
        purchase:data.amount,
        cashback:cashback

    }

}

module.exports = {

    processCashback

}
