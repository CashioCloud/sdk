class User{

    constructor(email){

        this.id = Date.now()

        this.email = email

        this.balance = 0

    }

}

module.exports = User
