const connection = require('./connection');

const orm = {
    selectAll: cb => {
        const queryString = 'SELECT * FROM burgers';
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    insertOne: (name, cb) => {
        const queryString = 'INSERT INTO burgers (burger_name, eaten) VALUES (?, false)';
        connection.query(queryString, [name], (err, results) => {
            if (err) throw err;

            cb(results);
        });
    },
    updateOne: (id, values, cb) => {
        const queryString = 'UPDATE burgers SET ? WHERE id=?';
        connection.query(queryString, [values, id], (err, results) => {
            if (err) throw err;

            cb(results);
        });
    },
    deleteOne: (id, cb) => {
        const queryString = 'DELETE FROM burgers WHERE ?';
        connection.query(queryString, {id}, (err, results) => {
            if (err) throw err;

            cb(results);
        });
    }
};

module.exports = orm;
