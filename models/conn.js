const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query)
    }
});


const options = {
    hotst:'localhost',
    database:'coffee-orders'
}

const db = pgp(options);
module.exports = db;