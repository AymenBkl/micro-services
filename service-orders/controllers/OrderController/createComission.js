
const commision = require('../../models/commision');

module.exports = {
    createCommission: (data) => {
        commision.create(data)
            .then((commission) => {
                if (commission) {
                    console.log("commision create")
                }
                else {
                    console.log("commision createsss")
                }
            })
            .catch(err => {
                console.log(err);
            })
        
    }
}