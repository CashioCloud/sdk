class Transaction{

    constructor(user,amount){

        this.id = Date.now()

        this.user = user

        this.amount = amount

        this.date = new Date()

    }

}

module.exports = Transaction
