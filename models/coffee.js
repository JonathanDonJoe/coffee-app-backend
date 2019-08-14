const db = require('./conn');


function getAll() {
    return db.any(`SELECT * FROM coffee`)
        .catch( (e) => {
            console.log(e);
            return null;
        })
}
function getById(id) {
    return db.one(`SELECT * FROM coffee WHERE id =${id}`)
        .catch( (e) => {
            console.log(e);
            return null;
        })
}

module.exports = {getAll, getById};